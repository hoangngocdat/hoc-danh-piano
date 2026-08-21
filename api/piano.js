export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            error: "Chỉ hỗ trợ POST"
        });
    }

    try {

        const { title } = req.body || {};

        if (!title) {
            return res.status(400).json({
                success: false,
                error: "Thiếu tên bài hát"
            });
        }

        /*
         * BỘ NỐT TEST
         * Dùng để kiểm tra hệ thống Auto Piano.
         */

        const demoNotes = [
            { note: "C4", duration: 0.5 },
            { note: "C4", duration: 0.5 },
            { note: "G4", duration: 0.5 },
            { note: "G4", duration: 0.5 },
            { note: "A4", duration: 0.5 },
            { note: "A4", duration: 0.5 },
            { note: "G4", duration: 1 },

            { note: "F4", duration: 0.5 },
            { note: "F4", duration: 0.5 },
            { note: "E4", duration: 0.5 },
            { note: "E4", duration: 0.5 },
            { note: "D4", duration: 0.5 },
            { note: "D4", duration: 0.5 },
            { note: "C4", duration: 1 }
        ];

        return res.status(200).json({

            success: true,

            title: title,

            notes: demoNotes,

            message: "Đã lấy dữ liệu nốt 🎹"

        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            error: "Lỗi server"
        });

    }

}

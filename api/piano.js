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
         * DỮ LIỆU TEST
         * Hiện tại dùng để kiểm tra luồng:
         *
         * YouTube
         * ↓
         * API
         * ↓
         * notes
         * ↓
         * Piano
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

            message: "Đã tạo dữ liệu nốt test 🎹"

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            error: "Lỗi server"
        });

    }

}

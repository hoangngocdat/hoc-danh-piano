export default async function handler(req, res) {

    if (req.method !== "POST") {

        return res.status(405).json({
            success: false,
            error: "Chỉ hỗ trợ POST"
        });

    }

    try {

        const {
            title
        } = req.body || {};

        if (!title) {

            return res.status(400).json({
                success: false,
                error: "Thiếu tên bài hát"
            });

        }

        return res.status(200).json({

            success: true,

            title: title,

            message:
                "Đã nhận tên bài hát 🎵"

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            error:
                "Lỗi server"

        });

    }

}

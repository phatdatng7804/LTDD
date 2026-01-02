/**
 * @swagger
 * tags:
 *   name: Project
 *   description: Quản lý dự án từ thiện (Admin)
 */

/**
 * @swagger
 * /api/project/get:
 *   get:
 *     summary: Lấy danh sách dự án từ thiện
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy danh sách dự án thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: integer
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: "Lấy danh sách dự án thành công"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       category_id:
 *                         type: integer
 *                         example: 1
 *                       fund_id:
 *                         type: integer
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: "Dự án hỗ trợ trẻ em nghèo"
 *                       short_description:
 *                         type: string
 *                         example: "Mô tả ngắn về dự án"
 *                       description:
 *                         type: string
 *                         example: "Mô tả chi tiết về dự án"
 *                       goal_amount:
 *                         type: number
 *                         example: 50000000
 *                       current_amount:
 *                         type: number
 *                         example: 25000000
 *                       donation_count:
 *                         type: integer
 *                         example: 150
 *                       status:
 *                         type: string
 *                         enum: [active, completed, cancelled, pending]
 *                         example: "active"
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 *       403:
 *         description: Không có quyền truy cập
 *       500:
 *         description: Lỗi server
 */

/**
 * @swagger
 * /api/project/created:
 *   post:
 *     summary: Tạo mới dự án từ thiện
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - category_id
 *               - fund_id
 *               - title
 *               - goal_amount
 *             properties:
 *               category_id:
 *                 type: integer
 *                 minimum: 1
 *                 example: 1
 *                 description: ID danh mục (bắt buộc)
 *               fund_id:
 *                 type: integer
 *                 minimum: 1
 *                 example: 1
 *                 description: ID tổ chức từ thiện (bắt buộc)
 *               title:
 *                 type: string
 *                 example: "Dự án hỗ trợ trẻ em nghèo"
 *                 description: Tiêu đề dự án (bắt buộc)
 *               short_description:
 *                 type: string
 *                 example: "Mô tả ngắn về dự án"
 *                 description: Mô tả ngắn về dự án
 *               description:
 *                 type: string
 *                 example: "Mô tả chi tiết về dự án từ thiện"
 *                 description: Mô tả chi tiết về dự án
 *               goal_amount:
 *                 type: number
 *                 minimum: 0
 *                 example: 50000000
 *                 description: Số tiền mục tiêu (bắt buộc)
 *     responses:
 *       201:
 *         description: Tạo dự án thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: integer
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: "Tạo dự án thành công"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     category_id:
 *                       type: integer
 *                       example: 1
 *                     fund_id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Dự án hỗ trợ trẻ em nghèo"
 *                     goal_amount:
 *                       type: number
 *                       example: 50000000
 *                     current_amount:
 *                       type: number
 *                       example: 0
 *                     donation_count:
 *                       type: integer
 *                       example: 0
 *                     status:
 *                       type: string
 *                       example: "pending"
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 *       403:
 *         description: Không có quyền Admin
 *       500:
 *         description: Lỗi server
 */

/**
 * @swagger
 * /api/project/update/{id}:
 *   put:
 *     summary: Cập nhật dự án từ thiện
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của dự án cần cập nhật
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category_id:
 *                 type: integer
 *                 minimum: 1
 *                 example: 2
 *                 description: ID danh mục mới
 *               fund_id:
 *                 type: integer
 *                 minimum: 1
 *                 example: 2
 *                 description: ID tổ chức từ thiện mới
 *               title:
 *                 type: string
 *                 example: "Dự án hỗ trợ người già"
 *                 description: Tiêu đề dự án mới
 *               short_description:
 *                 type: string
 *                 example: "Mô tả ngắn cập nhật"
 *                 description: Mô tả ngắn về dự án
 *               description:
 *                 type: string
 *                 example: "Mô tả chi tiết cập nhật về dự án"
 *                 description: Mô tả chi tiết về dự án
 *               goal_amount:
 *                 type: number
 *                 minimum: 0
 *                 example: 75000000
 *                 description: Số tiền mục tiêu mới
 *               status:
 *                 type: string
 *                 enum: [active, completed, cancelled, pending]
 *                 example: "active"
 *                 description: Trạng thái dự án
 *     responses:
 *       200:
 *         description: Cập nhật dự án thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: integer
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: "Cập nhật dự án thành công"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     category_id:
 *                       type: integer
 *                       example: 2
 *                     fund_id:
 *                       type: integer
 *                       example: 2
 *                     title:
 *                       type: string
 *                       example: "Dự án hỗ trợ người già"
 *                     status:
 *                       type: string
 *                       example: "active"
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 *       403:
 *         description: Không có quyền Admin
 *       404:
 *         description: Không tìm thấy dự án
 *       500:
 *         description: Lỗi server
 */

/**
 * @swagger
 * /api/project/delete/{id}:
 *   delete:
 *     summary: Xóa dự án từ thiện
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của dự án cần xóa
 *         example: 1
 *     responses:
 *       200:
 *         description: Xóa dự án thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: integer
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: "Xóa dự án thành công"
 *                 data:
 *                   type: object
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 *       403:
 *         description: Không có quyền Admin
 *       404:
 *         description: Không tìm thấy dự án
 *       500:
 *         description: Lỗi server
 */

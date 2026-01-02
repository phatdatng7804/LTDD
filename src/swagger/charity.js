/**
 * @swagger
 * tags:
 *   name: Charity
 *   description: Quản lý quỹ từ thiện (Admin)
 */

/**
 * @swagger
 * /api/charity/get:
 *   get:
 *     summary: Lấy danh sách quỹ từ thiện
 *     tags: [Charity]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy danh sách quỹ từ thiện thành công
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
 *                   example: "Lấy danh sách quỹ từ thiện thành công"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Quỹ từ thiện ABC"
 *                       description:
 *                         type: string
 *                         example: "Mô tả về quỹ từ thiện"
 *                       phone_number:
 *                         type: string
 *                         example: "0123456789"
 *                       email:
 *                         type: string
 *                         example: "charity@example.com"
 *                       bank_name:
 *                         type: string
 *                         example: "Vietcombank"
 *                       total_amount:
 *                         type: number
 *                         example: 1000000
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 *       403:
 *         description: Không có quyền truy cập
 *       500:
 *         description: Lỗi server
 */

/**
 * @swagger
 * /api/charity/created:
 *   post:
 *     summary: Tạo mới quỹ từ thiện
 *     tags: [Charity]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Quỹ từ thiện ABC"
 *                 description: Tên quỹ từ thiện (bắt buộc)
 *               description:
 *                 type: string
 *                 example: "Mô tả về quỹ từ thiện"
 *                 description: Mô tả về quỹ từ thiện
 *               phone_number:
 *                 type: string
 *                 example: "0123456789"
 *                 description: Số điện thoại (10-11 chữ số)
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "charity@example.com"
 *                 description: Email liên hệ
 *               bank_name:
 *                 type: string
 *                 example: "Vietcombank"
 *                 description: Tên ngân hàng
 *               total_amount:
 *                 type: number
 *                 minimum: 0
 *                 example: 0
 *                 description: Tổng số tiền quỹ
 *     responses:
 *       201:
 *         description: Tạo quỹ từ thiện thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: integer
 *                   example: 0
 *                 mes:
 *                   type: string
 *                   example: "Tạo quỹ từ thiện thành công"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "Quỹ từ thiện ABC"
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
 * /api/charity/update/{name}:
 *   put:
 *     summary: Cập nhật quỹ từ thiện
 *     tags: [Charity]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Tên quỹ từ thiện cần cập nhật
 *         example: "Quỹ từ thiện ABC"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Quỹ từ thiện XYZ"
 *                 description: Tên quỹ từ thiện mới
 *               description:
 *                 type: string
 *                 example: "Mô tả cập nhật về quỹ từ thiện"
 *                 description: Mô tả về quỹ từ thiện
 *               phone_number:
 *                 type: string
 *                 example: "0987654321"
 *                 description: Số điện thoại (10-11 chữ số)
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "newcharity@example.com"
 *                 description: Email liên hệ
 *               bank_name:
 *                 type: string
 *                 example: "BIDV"
 *                 description: Tên ngân hàng
 *               total_amount:
 *                 type: number
 *                 minimum: 0
 *                 example: 5000000
 *                 description: Tổng số tiền quỹ
 *     responses:
 *       200:
 *         description: Cập nhật quỹ từ thiện thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: integer
 *                   example: 0
 *                 mes:
 *                   type: string
 *                   example: "Cập nhật quỹ từ thiện thành công"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "Quỹ từ thiện XYZ"
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 *       403:
 *         description: Không có quyền Admin
 *       404:
 *         description: Không tìm thấy quỹ từ thiện
 *       500:
 *         description: Lỗi server
 */

/**
 * @swagger
 * /api/charity/delete/{name}:
 *   delete:
 *     summary: Xóa quỹ từ thiện
 *     tags: [Charity]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Tên quỹ từ thiện cần xóa
 *         example: "Quỹ từ thiện ABC"
 *     responses:
 *       200:
 *         description: Xóa quỹ từ thiện thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: integer
 *                   example: 0
 *                 mes:
 *                   type: string
 *                   example: "Xóa quỹ từ thiện thành công"
 *                 data:
 *                   type: object
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 *       403:
 *         description: Không có quyền Admin
 *       404:
 *         description: Không tìm thấy quỹ từ thiện
 *       500:
 *         description: Lỗi server
 */

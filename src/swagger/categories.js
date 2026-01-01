/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Quản lý danh mục (Admin)
 */

/**
 * @swagger
 * /category/get:
 *   get:
 *     summary: Lấy danh sách category
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy danh sách category thành công
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 *       403:
 *         description: Không có quyền Admin
 */
/**
 * @swagger
 * /category/created:
 *   post:
 *     summary: Tạo mới category
 *     tags: [Category]
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
 *                 example: "Action Game"
 *     responses:
 *       201:
 *         description: Tạo category thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 *       403:
 *         description: Không có quyền Admin
 */
/**
 * @swagger
 * /category/update/{id}:
 *   put:
 *     summary: Cập nhật category
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Adventure Game"
 *     responses:
 *       200:
 *         description: Cập nhật category thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 *       403:
 *         description: Không có quyền Admin
 *       404:
 *         description: Không tìm thấy category
 */
/**
 * @swagger
 * /category/delete/{id}:
 *   delete:
 *     summary: Xóa category
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của category
 *     responses:
 *       200:
 *         description: Xóa category thành công
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 *       403:
 *         description: Không có quyền Admin
 *       404:
 *         description: Không tìm thấy category
 */

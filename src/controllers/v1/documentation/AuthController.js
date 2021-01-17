/**
 * @api {post} /api/v1/auth Authenticate User
 * @apiName AuthUser
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email  user email
 * @apiParam {String} password  user password
 *
 * @apiSuccess {id} user id
 * @apiSuccess {String} username username
 * @apiSuccess {String} email  user email
 * @apiSuccess {String} password  hashed password
 * @apiSuccess {String} token  user token used for all auth requests
 * @apiSuccess {String} createdAt  record creation date
 * @apiSuccess {String} updatedAt  record update date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "id": 1,
 *        "username": "arundeep",
 *        "email": "arundeep@a.com",
 *        "password": "$2a$10$KqoWR5R6IOonqOjuLAoMLudQwXm3ZLtnUd.d7apQXLNw.JNPJLzaO",
 *        "createdAt": "2020-12-01T20:25:01.384Z",
 *        "updatedAt": "2020-12-01T20:25:01.384Z"
 *        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2ODU1MDcwLCJleHAiOjE2MDY5NDE0NzAsImF1ZCI6InlvdXJzaXRlLm5ldCIsImlzcyI6ImFjY291bnRzLmV4YW1wbGVzb2Z0LmNvbSJ9.vkcM2nlRUS5k_PQJ8xw-D1HUib9yL_p7mFUU6rRFO00"
 *    }
 *
 * @apiError Unauthorized
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "Message": "Could not login"
 *     }
 */

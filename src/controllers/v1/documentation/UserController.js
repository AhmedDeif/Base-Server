/**
 * @api {get} /api/v1/users Get all users
 * @apiName GetUsers
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization User bearer token
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {id} user id
 * @apiSuccess {String} username username
 * @apiSuccess {String} email  user email
 * @apiSuccess {String} password  hashed password
 * @apiSuccess {String} createdAt  record creation date
 * @apiSuccess {String} updatedAt  record update date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *    {
 *        "id": 1,
 *        "username": "arundeep",
 *        "email": "a@a.com",
 *        "password": "$2a$10$KqoWR5R6IOonqOjuLAoMLudQwXm3ZLtnUd.d7apQXLNw.JNPJLzaO",
 *        "createdAt": "2020-12-01T20:25:01.384Z",
 *        "updatedAt": "2020-12-01T20:25:01.384Z"
 *    }
 *
 *
 * @apiError UserNotFound The id of the User was not found or you are unauthorized
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 */

/**
 * @api {get} /api/v1/users/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization User bearer token
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {id} user id
 * @apiSuccess {String} username username
 * @apiSuccess {String} email  user email
 * @apiSuccess {String} password  hashed password
 * @apiSuccess {String} createdAt  record creation date
 * @apiSuccess {String} updatedAt  record update date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "id": 1,
 *        "username": "arundeep",
 *        "email": "a@a.com",
 *        "password": "$2a$10$KqoWR5R6IOonqOjuLAoMLudQwXm3ZLtnUd.d7apQXLNw.JNPJLzaO",
 *        "createdAt": "2020-12-01T20:25:01.384Z",
 *        "updatedAt": "2020-12-01T20:25:01.384Z"
 *    }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "Message": "User not found"
 *     }
 */

/**
 * @api {delete} /api/v1/users/:id delete User
 * @apiName DeleteUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization User bearer token
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} Message  action message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "Message": "User deleted"
 *    }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "Message": "User not found"
 *     }
 */

/**
 * @api {put} /api/v1/users/:id Update User
 * @apiName UpdateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization User bearer token
 *
 * @apiParam {Number} id Users unique ID.
 * @apiParam {String} username username
 * @apiParam {String} email  user email
 *
 * @apiSuccess {id} user id
 * @apiSuccess {String} username username
 * @apiSuccess {String} email  user email
 * @apiSuccess {String} password  hashed password
 * @apiSuccess {String} createdAt  record creation date
 * @apiSuccess {String} updatedAt  record update date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "id": 1,
 *        "username": "arundeep",
 *        "email": "a@a.com",
 *        "password": "$2a$10$KqoWR5R6IOonqOjuLAoMLudQwXm3ZLtnUd.d7apQXLNw.JNPJLzaO",
 *        "createdAt": "2020-12-01T20:25:01.384Z",
 *        "updatedAt": "2020-12-01T20:25:01.384Z"
 *    }
 *
 * @apiError UserNotFound The id of the User was not found or you are unauthorized
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 */

/**
 * @api {post} /api/v1/users Create User
 * @apiName CreateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {String} username username
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
 *        "email": "a@a.com",
 *        "password": "$2a$10$KqoWR5R6IOonqOjuLAoMLudQwXm3ZLtnUd.d7apQXLNw.JNPJLzaO",
 *        "createdAt": "2020-12-01T20:25:01.384Z",
 *        "updatedAt": "2020-12-01T20:25:01.384Z"
 *        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2ODU1MDcwLCJleHAiOjE2MDY5NDE0NzAsImF1ZCI6InlvdXJzaXRlLm5ldCIsImlzcyI6ImFjY291bnRzLmV4YW1wbGVzb2Z0LmNvbSJ9.vkcM2nlRUS5k_PQJ8xw-D1HUib9yL_p7mFUU6rRFO00"
 *    }
 *
 * @apiError InvalidData The data provided is invalid
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "Message": "Missing user email"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "Message": "Missing user password"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "Message": "Missing username"
 *     }
 */

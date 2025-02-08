//      ------***APPROACH 1 using Try/Catch block***------
// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(res,req,next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message || "Internal Server Error: #An unknown error occured"
//         })
//     }
// }

// ------***APPROACH 2 using Promises***------
const asyncHandler = (reqHandler) => {
    (req,res,next) => {
        Promise.resolve(
            reqHandler(req,res,next)
        ).catch((error) => next(error) )
    }
}

export {asyncHandler}
//since we are going to use try/catch block in every route handler, we can create a utility function to handle the error and send the response to the client
//this will make our code cleaner and more readable
//we can also standardise the error response format
//done in src/utils/ApiError.js
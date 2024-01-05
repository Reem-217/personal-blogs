class ApiError extends Error{
   constructor(message,statusCode){
    super(message);
    this.status=`${statusCode}`.startsWith(4)?'fail':'error';
    this.statusCode=statusCode;
    this.isOpertinal=true;
   }
}
module.exports=ApiError;
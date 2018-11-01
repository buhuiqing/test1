//var publicUrl="/solr/mycore2/select?";


//现实库
 var  starttestaddress = "http://xptest.sunmath.cn:8199/NVRCT"/*测试接口地址*/
 var  registerHref = "http://10.0.0.97:83/index.html"/*注册测试连接*/
//var  starttestaddress = "http://xp.lhy.sunmath.cn:8199/NVRCT"/*正式接口地址*/
//var  registerHref = "http://uc.weilian.cn/"/*注册正式连接*/
var  PCController = starttestaddress + "/appController/getApplicationForClient"; /* 为终端提供应用环境查询 */
var  StarController = starttestaddress + "/sevenStarController/getSevenStarByOrgName"; /* 集团名称取得七星配置列表 */
var  Authentication = starttestaddress + "/authController/getAuthenticationForClient"; /* 通过集团名称查询鉴权配置列表 */
var  Transcircles = starttestaddress + "/transController/getOrgCircleData"; /* 主页圈的接口 */
var  Beijingcircles = "http://10.0.0.106:8199/NVRCT/transController/getOrgCircleData" /* 时空中心主页圈的接口 */
//var  Spacecircles = "/disneyOrder/listTodayOrder"; /* 主页第三个圈的接口 */


// 时间相关的操作 API

/**
var myDate = new Date();
myDate.getYear();        //获取当前年份(2位)
myDate.getFullYear();    //获取完整的年份(4位,1970-????)
myDate.getMonth();       //获取当前月份(0-11,0代表1月)
myDate.getDate();        //获取当前日(1-31)
myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours();       //获取当前小时数(0-23)
myDate.getMinutes();     //获取当前分钟数(0-59)
myDate.getSeconds();     //获取当前秒数(0-59)
myDate.getMilliseconds();    //获取当前毫秒数(0-999)
myDate.toLocaleDateString();     //获取当前日期
var mytime=myDate.toLocaleTimeString();     //获取当前时间
myDate.toLocaleString( );        //获取日期与时间
**/

/****************以下是相关具体的函数****************************************/

/**
 * @author [meddkim]
 * @description  [该函数返回一个指定格式的时间，具体某一天]
 * @since  [0.0.1]
 * @version [0.0.1]
 * @param  detail:具体需要那一天，例如0代表系统当前时间，-n代表往前推几天，n代表往后推几天
 *         separator：用于分割年月日
 * @return 获取日期
 */
function GetLocalFormatDate(detail,separator){
	var nowDate = new Date();
    nowDate.setDate(nowDate.getDate()+detail);//获取AddDayCount天后的日期
    var y = nowDate.getFullYear();
    var m = nowDate.getMonth()+1;//获取当前月份的日期
    var d = nowDate.getDate();
    if(d<10 && m<10){
        return y+separator+"0"+m+separator+"0"+d;
    }else if(d<10 && m>=10){
        return y+separator+m+separator+"0"+d;
    }else if(d>=10 && m<10){
        return y+separator+"0"+m+separator+d;
    }else{
        return y+separator+m+separator+d;
    }
} 
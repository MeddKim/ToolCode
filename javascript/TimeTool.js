// ʱ����صĲ��� API

/**
var myDate = new Date();
myDate.getYear();        //��ȡ��ǰ���(2λ)
myDate.getFullYear();    //��ȡ���������(4λ,1970-????)
myDate.getMonth();       //��ȡ��ǰ�·�(0-11,0����1��)
myDate.getDate();        //��ȡ��ǰ��(1-31)
myDate.getDay();         //��ȡ��ǰ����X(0-6,0����������)
myDate.getTime();        //��ȡ��ǰʱ��(��1970.1.1��ʼ�ĺ�����)
myDate.getHours();       //��ȡ��ǰСʱ��(0-23)
myDate.getMinutes();     //��ȡ��ǰ������(0-59)
myDate.getSeconds();     //��ȡ��ǰ����(0-59)
myDate.getMilliseconds();    //��ȡ��ǰ������(0-999)
myDate.toLocaleDateString();     //��ȡ��ǰ����
var mytime=myDate.toLocaleTimeString();     //��ȡ��ǰʱ��
myDate.toLocaleString( );        //��ȡ������ʱ��
**/

/****************��������ؾ���ĺ���****************************************/

/**
 * @author [meddkim]
 * @description  [�ú�������һ��ָ����ʽ��ʱ�䣬����ĳһ��]
 * @since  [0.0.1]
 * @version [0.0.1]
 * @param  detail:������Ҫ��һ�죬����0����ϵͳ��ǰʱ�䣬-n������ǰ�Ƽ��죬n���������Ƽ���
 *         separator�����ڷָ�������
 * @return ��ȡ����
 */
function GetLocalFormatDate(detail,separator){
	var nowDate = new Date();
    nowDate.setDate(nowDate.getDate()+detail);//��ȡAddDayCount��������
    var y = nowDate.getFullYear();
    var m = nowDate.getMonth()+1;//��ȡ��ǰ�·ݵ�����
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
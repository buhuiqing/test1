/**
 * Created by ly on 2017/6/20.
 */

    function changeNumberTime(JQDomInnerHtml,newNumber,oldNumber,initTime){
        var add = 0;
        var changeNumberTimer = null;
        if(newNumber>oldNumber){
            changeNumberTimer = setInterval(function () {
                add++;
                JQDomInnerHtml.html(+oldNumber+add+'%');
                if( +oldNumber+add >= newNumber ){
                    clearInterval(changeNumberTimer);
                    JQDomInnerHtml.html(+newNumber+'%');
                }
            },initTime)
        }else if(newNumber<oldNumber){
            changeNumberTimer = setInterval(function () {
                add++;
                JQDomInnerHtml.html(+oldNumber-add+'%');
                if( +oldNumber-add <= newNumber ){
                    clearInterval(changeNumberTimer);
                    JQDomInnerHtml.html(+newNumber+'%');
                }
            },initTime)
        }

    }

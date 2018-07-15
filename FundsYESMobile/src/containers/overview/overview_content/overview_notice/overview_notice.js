/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React, { Component } from 'react';

/* css */
import OverviewNoticeStyle from './overview_notice.scss';

const overviewNotice =
{
    txtRemindTitle: "提醒你",
    txtRemindList: 
    [
        "以上成本未含手續費，上述參考報酬率未計入已領回之現金利息。",
        "自2016/11/3起，為滿足投資人投資參考需求，轉換交易成本計算原則，更改為「轉入成本=轉入基金淨值x轉入單位數」。"
    ],
    txtNoticeTitle: "注意事項",
    txtNoticeList: 
    [
        "上述投資組合損益，為資料期間內已完成交易程序者，資料若有不符，應以臺灣集中保管結算所電腦記錄為準，歡迎您至集保網站查詢 (www.tdcc.com.tw) 。",
        "申購、買回及配息資訊所涉之匯率轉換，交易匯率係由臺灣集中保管結算所之收付銀行（華南銀行）提供；資產總額亦以此參考匯價計算，系統為每日早上10點更新至前一營業日之結算匯價。",
        "轉換原則上皆以當日淨值進行交易，遇休假則交易日順延，實際以個別基金公司規定為準。基金轉換時收取之轉換作業手續費為新台幣300元/次。（為嘉惠投資人，即日起~2016年8月11日免收轉換作業費，自2016年8月12日起恢復收取)",
        "未實現損益金額係以基準日之單位數、淨值及匯率計算，且不包含已發放之現金配息，投資人實際損益需待買回分配後確定。",
        "參考報酬率(不含息)包含採定期定額投資與單筆投資之結存單位數，並以（約當市值 - 總投資成本）/ 總投資成本*100% 方式簡單計算，暫不考慮時間價值。",
        "台幣投資結餘係將所有台幣投資部位加總計算，外幣投資結餘則是將相同投資幣別的外幣投資部位加總計算。",
        "若您對上列資訊有任何疑問，請洽客服專線：02-27208126，線上將有專人為您服務。",
        "嚴禁擇時交易及短線交易，若基金機構或總代理人認為本人從事此類交易時，基金機構或總代理人有權拒絕受理本人所提出之任何申購、買回或轉換申請，絕無異議。您可至常見問題/投資實務參考詳細規定。"
    ],
    txtTDCCUrl: "https://www.tdcc.com.tw/"
}

class OverviewNotice extends Component {
    
    render() {
        const { txtRemindTitle, txtRemindList, txtNoticeTitle, txtNoticeList, txtTDCCUrl } = overviewNotice;
        
        return (
            <div className="overview-notice-main">
                <div>
                    <div className="remind-title">{txtRemindTitle}</div>
                    <ul>
                    {
                        txtRemindList.map((string, index) => {
                            return (
                                <li key={index}>{string}</li>
                            );
                        })
                    }
                    </ul>
                </div>
                <div className="notice-list">
                    <div className="notice-title">{txtNoticeTitle}</div>
                    <ol>
                    {
                        txtNoticeList.map((string, index) => {
                            return (
                                string.search(/www.tdcc.com.tw/i) > 0
                                ?   <li key={index}>{string.substr(0, string.search(/www.tdcc.com.tw/i))}
                                        <a href={txtTDCCUrl} target="_blank">www.tdcc.com.tw</a>) 。
                                    </li>
                                :   string.search(/自/i) > 0
                                    ?   <li key={index}>{string.substr(0, string.search(/自/i))}
                                            <span className="red-str">自2016年8月12日起恢復收取</span>)
                                        </li>
                                    :   string.search(/常見/i) > 0
                                        ?   <li key={index}>{string.substr(0, string.search(/常見/i))}
                                                <a target="_blank">常見問題/投資實務</a>參考詳細規定。
                                            </li>
                                        :   <li key={index}>{string}</li>
                            );
                        })
                    }
                    </ol>
                </div>
            </div>
        );
    }
}

export default OverviewNotice;
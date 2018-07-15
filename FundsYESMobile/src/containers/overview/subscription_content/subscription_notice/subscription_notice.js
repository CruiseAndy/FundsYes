/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React, { Component } from 'react';

/* css */
import SubscriptionStyle from './subscription_notice.scss';

const subscriptionNotice =
{
    txtNoticeList:
    [ 
        "單筆申購收件截止時間每營業日下午13:30止，如逾時，則順延至次一營業日辦理。所稱之營業日為中華民國及境外基金註冊地營業日，若任一地休市或無報價，所有交易均順延至次一營業日，淨值亦以次一營業日為準。各基金營業日相關規定，您可至金融行事曆查詢或詳見各基金公開說明書。",
        "基金交易原則上以當日淨值為準，特定系列基金以T+1日淨值計算，您可至常見問題/投資實務查詢，實際以個別基金公司規定為準。",
        "本交易平台之基金配息，均為現金發放，匯款相關費用，集保結算所並得逕行於款項中扣除。如款項不足支付匯款費用，集保將暫不予匯款，併未來款項足額後再行處理。您可至常見問題/投資實務參考詳細規定。",
        "瀚亞投資系列-若該基金當月可分配收益總金額未達美金/澳幣/紐幣100元/南非幣1,000元整(或等值之金額)，或歐元50元整，則其孳息款項將依收益分配發放日當日淨值再投資等值單位數併入原投資基金庫存。",
        "自然人每日使用電子交易系統除依電子交易作業準則規範外，於本公司網路交易系統進行申購，單筆及定期定額申購總額以新台幣490萬元(或等值外幣)為上限。",
        "款項收付方式與結匯方式依「集保結算所」業務s操作辦法辦理。申購款項加計手續費金額，需於營業日14:00前存入集保約定之帳戶，若因故無法在指定時間內補足款項，則當次扣款即告失敗。",
        "依集保作業規定，客戶如僅約定台幣為買回帳戶，即申購時僅能以台幣申購基金；如僅約定外幣為買回帳戶，則申購時應以基金計價幣別為之。",
        "嚴禁擇時交易及短線交易，若基金機構或總代理人認本人從事此類交易時，基金機構或總代理人有權拒絕受理本人所提出之任何申購、買回或轉換申請，絕無異議。您可至常見問題/投資實務參考詳細規定。"
    ],
    txtCalendar: "https://www.fundsyes.com/Service/Calendar.aspx",
    txtFAQ: "https://www.fundsyes.com/Service/FAQ.aspx"
}

class Notice extends Component {
    
    render() {
        const { txtNoticeList, txtCalendar, txtFAQ } = subscriptionNotice;
        
        return (
            <div className="notice-main">
                <div>注意事項</div>
                <ol>
                {
                    txtNoticeList.map((string, index) => {
                        return (
                            index === 3
                            ?   <li key={index}>
                                    <span className="red-str">{string}</span>
                                </li>
                            :   string.search(/常見/i) > 0
                                ?   <li key={index}>{string.substr(0, string.search(/常見/i))}
                                        <a href={txtFAQ} target="_blank">常見問題/投資實務</a>
                                        {string.substr((string.search(/常見/i) + 9), string.length)}
                                    </li>
                                :   string.search(/行事曆/i) > 0
                                    ?   <li key={index}>{string.substr(0, string.search(/行事曆/i))}
                                            <a href={txtCalendar} target="_blank">金融行事曆</a>
                                            {string.substr((string.search(/行事曆/i) + 5), string.length)}
                                        </li>
                                    :   <li key={index}>{string}</li>
                        );
                    })
                }
                </ol>
            </div>
        );
    }
}

export default Notice;
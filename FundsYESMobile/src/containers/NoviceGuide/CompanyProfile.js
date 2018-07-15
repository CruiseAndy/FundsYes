/* tool */
import React, { Component } from 'react';
import LoginStyle from './NoviceGuide.scss';

/* component */
import PageHeader from '../../manager/components/page_header/page_header';
import Footer from '../../manager/components/footer/footer';
class CompanyProfile extends Component {

    render() {
        return (
            <div className="login-main">
                <div>
                    <PageHeader />
                </div>
                <div>
                   <span className="headBlock">公司簡介</span>
			             <p>FundsYES.com是鉅亨網投顧的基金銷售平台，我們為投資人提供理財顧問諮詢，以及境外基金網路交易服務。作為基金投資平台，FundsYES.com讓您更容易透過我們的技術、工具以及服務來管理您的投資。我們提供給您：</p>
			             <ul>
				               <li className="liTitle">客觀中立的投資顧問<p>以客為先是我們最重視的企業文化。鉅亨網投顧建立專業的研究團隊，站在中立的立場，提供客觀、專業的研究報告，以及適切的基金產品，協助您進行投資規劃。</p></li>
				               <li className="liTitle">全方位服務平台<p>鉅亨網集團擁有台灣訪問量最大的財經類型網站─鉅亨網(資料來源：comscore)，是台灣超過100萬名投資大眾獲取資訊、互動交流的平台。鉅亨網投顧作為鉅亨網集團旗下的基金銷售平台，擁有全面、及時的基金資訊和數據，為廣大投資者提供一站式基金理財服務。</p></li>
			             </ul>
			             <h2 className="h2Title">一、為什麼選擇FundsYES鉅亨網投顧</h2>
			             <ul>
			                <li className="liTitle">操作簡易的平台  讓您輕鬆進行交易<p>基金平台是我們的核心業務，我們提供您簡單、易操作的介面，讓您在平台上直接進行投資。您可在平台上瀏覽基金最新淨值、報酬率，查詢交易明細以及投資盈虧，並且透過網路即可隨時隨地執行交易。</p></li>
			                <li className="liTitle">交易成本更划算  讓您投資再省更多<p>作為長期投資者，我們希望您專注於基金表現，而不是費心尋找最低成本的投資管道。我們提供最低終身2折申購費率，於網路開戶且核印成功首月(30日內)，不論單筆或定期定額申購，且不限股債及交易筆數，享最低0.45%手續費，讓您在交易時省下更多手續費用。</p></li>
			                <li className="liTitle">多樣化投資工具  助您做好投資決策<p>智慧投資來自於正確的資訊，我們提供您覆蓋全球市場的研究報告，深入的基金分析與經理人專訪，讓您透過平台隨時關注基金動向。我們同時提供線上問卷以及篩選工具，協助您選擇適合的產品、踏穩基金理財的每一步。</p></li>
			                <li className="liTitle">免費的投資諮詢  讓您放心開始投資<p>我們提供您投資組合或產品推薦方面的投資諮詢，不同的是，我們不會因為個人利益而向您推薦不適宜或增加投資成本的產品，除避免利益衝突外，也提高投資諮詢的透明度，讓您享受美好的投資體驗。</p></li>
			             </ul>
			             <h2 className="h2Title">二、收費一覽表</h2>
			             <p className="pContext">提供物超所值的投資服務是我們的目標，您可透過低收費的平台，將投資金額最大化，實現長期投資與交易的所有目標。</p>
			             <span className="pContext" style={{fontWeight: "bold"}}>免費服務</span>
			             <ul style={{marginLeft: "18px"}}>
			                <li>開立投資帳戶</li>
			                <li>投資諮詢</li>
              		 </ul>
			             <span style={{fontWeight:"bold"}}>費用更優惠</span>
			             <table className="tableAttr" cellspacing="0" cellpadding="0">
			                <thead>
			                   <tr>
            						     <td style={{width:"20%",backgroundColor:"#a19065",color:"white"}}>費用項目</td>
						                 <td style={{width:"40%",backgroundColor:"#a19065",color:"white"}}>鉅亨網投顧</td>
			                       <td style={{width:"40%",backgroundColor:"#a19065",color:"white"}}>其他銷售機構(僅供參考)</td>
              					 </tr>
			                </thead>
			                <tbody>
            						 <tr>
			                       <td style={{backgroundColor:"#a19065",color:"white"}}>申購手續費</td>
			                       <td>不論投資金額，均享終身2~3折優惠</td>
			                       <td>多按客戶資產提供分級折扣，約9~6折</td>
            						 </tr>
            						 <tr>
			                       <td style={{backgroundColor:"#a19065",color:"white"}}>信託保管費</td>
			                       <td>無</td>
			                       <td>每年約0.2%</td>
            						 </tr>
            						 <tr>
			                       <td style={{backgroundColor:"#a19065",color:"white"}}>轉換費</td>
			                       <td>每筆300元</td>
			                       <td>每筆500元</td>
            						 </tr>
			                </tbody>
			             </table>

			         </div>
			         <Footer />
			     </div>
        );
    }
}

export default CompanyProfile;

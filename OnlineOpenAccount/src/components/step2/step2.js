/* 
 * Created by kevin in 2018/01/10
 */

/* tools */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* css */
import './step2.scss';

/* component */
import Header from '../header/header';


const optionList = {
    /**
     * @parm1 : button text
     * @parm2 : question number
     * @parm3 : answer number
     */
    topic2: [
        [ "無經驗", "Q2", "01" ],
        [ "1年以下", "Q2", "02" ],
        [ "1-3年", "Q2", "03" ],
        [ "3-5年", "Q2", "04" ],
        [ "5年以上", "Q2", "05" ]
    ],
    topic3: [
        [ "0%-5%", "Q3", "01" ],
        [ "6%-10%", "Q3", "02" ],
        [ "11%-20%", "Q3", "03" ],
        [ "21%-30%", "Q3", "04" ],
        [ "31%以上", "Q3", "05" ]
    ],
    topic4: [
        [ "半年以下", "Q4", "01" ],
        [ "半年-1年", "Q4", "02" ],
        [ "1年-2年", "Q4", "03" ],
        [ "2年-3年", "Q4", "04" ],
        [ "3年以上", "Q4", "05" ]
    ],
    topic5: [
        [ "± 5%", "Q5", "01" ],
        [ "± 10%", "Q5", "02" ],
        [ "± 15%", "Q5", "03" ],
        [ "± 20%", "Q5", "04" ],
        [ "± 25%或以上", "Q5", "05" ]
    ],
    topic6: [
        [ "希望保值避免損失", "Q6", "01" ],
        [ "偏好損失機率最低，可以獲取穩定的收益", "Q6", "02" ],
        [ "願意承擔少量風險，以追求潛力報酬", "Q6", "03" ],
        [ "即使可能面臨較大的損失，仍然願意試試", "Q6", "04" ],
        [ "喜歡高風險高報酬，以追求快速獲利", "Q6", "05" ]
    ],
    topic7: [
        [ "全部贖回", "Q7", "01" ],
        [ "部分贖回", "Q7", "02" ],
        [ "繼續觀察後市", "Q7", "03" ],
        [ "考慮逢低加碼進場", "Q7", "04" ],
        [ "積極以較低的價格加碼進場", "Q7", "05" ]
    ],
    topic8: [
        [ "只願投資較保守的產品", "Q8", "01" ],
        [ "儲蓄退休金", "Q8", "02" ],
        [ "對抗通貨膨脹", "Q8", "03" ],
        [ "儲蓄子女教育基金", "Q8", "04" ],
        [ "追求資產增值", "Q8", "05" ]
    ],
    topic8: [
        [ "只願投資較保守的產品", "Q8", "01" ],
        [ "儲蓄退休金", "Q8", "02" ],
        [ "對抗通貨膨脹", "Q8", "03" ],
        [ "儲蓄子女教育基金", "Q8", "04" ],
        [ "追求資產增值", "Q8", "05" ]
    ],
    topic9: [
        [ "存款", "Q9", "01" ],
        [ "外幣投資 儲蓄型保險", "Q9", "02" ],
        [ "債券型基金 房地產投資", "Q9", "03" ],
        [ "股票型基金 投資型保單", "Q9", "04" ],
        [ "股票/衍生性金融商品", "Q9", "05" ]
    ],
    topic10: [
        [ "退休金", "Q10", "01" ],
        [ "儲蓄", "Q10", "02" ],
        [ "薪資收入 租金收入", "Q10", "03" ],
        [ "理財投資", "Q10", "04" ],
        [ "閒置資金運用", "Q10", "05" ]
    ]
}


class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topicNum: 1
        }
    }

    componentWillMount() {
        this.props.q1AnsChanged();
    }

    _showTopicButton = () => {
        /* 為了判斷使用者未選擇時，不能到下一題 */
        const { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10 } = this.props;
        const tmpData = [ Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10 ];

        return (
            <div>
                <button
                    className={ this.state.topicNum === 1 ? "btnTopicStepSpecial" : "btnTopicStep" }
                    style={{ marginRight: "10px" }}
                    onClick={
                        this.state.topicNum === 11
                        ?   () => 
                            this.setState(prevState => ({
                                topicNum: 1
                            }))
                        :   () => 
                            this.setState(prevState => ({
                                topicNum: prevState.topicNum - 1
                            }))
                    }
                >
                    {
                        this.state.topicNum === 1
                        ?   ""
                        :   this.state.topicNum === 11
                            ?   "重新測驗"
                            :   "上一題" 
                    }
                </button>
                <button
                    className="btnTopicStep"
                    onClick={
                        this.state.topicNum === 10
                        ?   () => {
                                if ( tmpData[this.state.topicNum - 1] !== "" && tmpData[this.state.topicNum - 1].length !== 0 ) {
                                    this.props.getTestResult(this.props);
                                }
                            }
                        :   () => {
                                if ( tmpData[this.state.topicNum - 1] !== "" && tmpData[this.state.topicNum - 1].length !== 0 ) {
                                    this.setState(prevState => ({
                                        topicNum: prevState.topicNum + 1
                                    }))
                                }
                                else {
                                    alert("請點選答案");
                                }
                            }
                    }
                >{ this.state.topicNum === 10 ? "完成測驗" : "下一題" }</button>
            </div>
        );
    }

    /******************** 前言 ********************/
    _uiTopicNum0 = () => {
        if (this.state.topicNum === 0) {
            return (
                <div>
                    <div className="Common-RowBox">
                        <div className="evaluateExplan">
                            <span>為保障您的權益，本公司訂定瞭解客戶審查作業程序(Know Your Client)評估您的投資風險適合度(Client Suitability)，同時配合政府洗錢防制政策及金融服務業相關法規，請您依據自身實際的狀況，完整留存相關基本資料，包括身分、財務背景、所得與資金來源、風險偏好、過往投資經驗及投資目的與需求等，以便選擇適合自己的基金標的，</span>
                            <span>敬請您完成以下問卷：</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="evaluateExplan">
                            <span>※未滿20足歲或受輔助之受益人，第二至十題請以法定代理人（父母雙方）或輔助人之情況填寫</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div>
                            <button
                                className="btnStartEvaluate"
                                onClick={ () => this.setState(prevState => ({ topicNum: prevState.topicNum + 1 })) }
                            >開始評估</button>
                        </div>
                    </div>
                </div>
            );
        }
    }

    /******************** 第一題 ********************/
    _uiTopicNum1 = () => {
        if (this.state.topicNum === 1) {
            return (
                <div>
                    <div className="Common-RowBox topicTitle">
                        <p>第一題</p>
                        <p>客戶年齡</p>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className="Common-RowOneButton"
                        >{this.props.Q1}
                        </button>
                    </div>
                    <div className="Common-RowBox">
                        {this._showTopicButton()}
                    </div>
                </div>
            );
        }
    }
    
    /******************** 第二題 ********************/
    _uiTopicNum2 = () => {
        if (this.state.topicNum === 2) {
            return (
                <div>
                    <div className="Common-RowBox topicTitle">
                        <p>第二題</p>
                        <p>投資經驗</p>
                    </div>
                    {
                        optionList.topic2.map((item, index) => {
                            return (
                                <div key={index} className="Common-RowBox">
                                    <button
                                        className={this.props.Q2 === index.toString() ? "Common-RowOneButton_Click" : "Common-RowOneButton"}
                                        value={index}
                                        onClick={ e => this.props.q2AnsChanged(e.target.value) }
                                    >{item[0]}
                                    </button>
                                </div>
                            );
                        })
                    }
                    <div className="Common-RowBox">
                        {this._showTopicButton()}
                    </div>
                </div>
            );
        }
    }
    
    /******************** 第三題 ********************/
    _uiTopicNum3 = () => {
        if (this.state.topicNum === 3) {
            return (
                <div>
                    <div className="Common-RowBox topicTitle">
                        <p>第三題</p>
                        <p>請問您的收入有多少比例可用於投資或儲蓄?</p>
                    </div>
                    {
                        optionList.topic3.map((item, index) => {
                            return (
                                <div key={index} className="Common-RowBox">
                                    <button
                                        className={this.props.Q3 === index.toString() ? "Common-RowOneButton_Click" : "Common-RowOneButton"}
                                        value={index}
                                        onClick={ e => this.props.q3AnsChanged(e.target.value) }
                                    >{item[0]}
                                    </button>
                                </div>
                            );
                        })
                    }
                    <div className="Common-RowBox">
                        {this._showTopicButton()}
                    </div>
                </div>
            );
        }
    }
    
    /******************** 第四題 ********************/
    _uiTopicNum4 = () => {
        if (this.state.topicNum === 4) {
            return (
                <div>
                    <div className="Common-RowBox topicTitle">
                        <p>第四題</p>
                        <p>請問您預計多久後贖回您的基金投資?</p>
                    </div>
                    {
                        optionList.topic4.map((item, index) => {
                            return (
                                <div key={index} className="Common-RowBox">
                                    <button
                                        className={this.props.Q4 === index.toString() ? "Common-RowOneButton_Click" : "Common-RowOneButton"}
                                        value={index}
                                        onClick={ e => this.props.q4AnsChanged(e.target.value) }
                                    >{item[0]}
                                    </button>
                                </div>
                            );
                        })
                    }
                    <div className="Common-RowBox">
                        {this._showTopicButton()}
                    </div>
                </div>
            );
        }
    }
    
    /******************** 第五題 ********************/
    _uiTopicNum5 = () => {
        if (this.state.topicNum === 5) {
            return (
                <div>
                    <div className="Common-RowBox topicTitle">
                        <p>第五題</p>
                        <p>價格波動的市場中,您可以接受的價格幅度?</p>
                    </div>
                    {
                        optionList.topic5.map((item, index) => {
                            return (
                                <div key={index} className="Common-RowBox">
                                    <button
                                        className={this.props.Q5 === index.toString() ? "Common-RowOneButton_Click" : "Common-RowOneButton"}
                                        value={index}
                                        onClick={ e => this.props.q5AnsChanged(e.target.value) }
                                    >{item[0]}
                                    </button>
                                </div>
                            );
                        })
                    }
                    <div className="Common-RowBox">
                        {this._showTopicButton()}
                    </div>
                </div>
            );
        }
    }
    
    /******************** 第六題 ********************/
    _uiTopicNum6 = () => {
        if (this.state.topicNum === 6) {
            return (
                <div>
                    <div className="Common-RowBox topicTitle">
                        <p>第六題</p>
                        <p>下列何者最接近您的投資行為與經驗?</p>
                    </div>
                    {
                        optionList.topic6.map((item, index) => {
                            return (
                                <div key={index} className="Common-RowBox">
                                    <button
                                        className={this.props.Q6 === index.toString() ? "Common-RowOneButton_Click" : "Common-RowOneButton"}
                                        value={index}
                                        onClick={ e => this.props.q6AnsChanged(e.target.value) }
                                    >{item[0]}
                                    </button>
                                </div>
                            );
                        })
                    }
                    <div className="Common-RowBox">
                        {this._showTopicButton()}
                    </div>
                </div>
            );
        }
    }
    
    /******************** 第七題 ********************/
    _uiTopicNum7 = () => {
        if (this.state.topicNum === 7) {
            return (
                <div>
                    <div className="Common-RowBox topicTitle">
                        <p>第七題</p>
                        <p>當您原本投資的股市已經損失了15%，這時您會?</p>
                    </div>
                    {
                        optionList.topic7.map((item, index) => {
                            return (
                                <div key={index} className="Common-RowBox">
                                    <button
                                        className={this.props.Q7 === index.toString() ? "Common-RowOneButton_Click" : "Common-RowOneButton"}
                                        value={index}
                                        onClick={ e => this.props.q7AnsChanged(e.target.value) }
                                    >{item[0]}
                                    </button>
                                </div>
                            );
                        })
                    }
                    <div className="Common-RowBox">
                        {this._showTopicButton()}
                    </div>
                </div>
            );
        }
    }
    
    /******************** 第八題 ********************/
    _uiTopicNum8 = () => {
        if (this.state.topicNum === 8) {
            return (
                <div>
                    <div className="Common-RowBox topicTitle">
                        <p>第八題</p>
                        <p>請問以下何者為您的投資目的? (可複選)</p>
                    </div>
                    {
                        optionList.topic8.map((item, index) => {
                            return (
                                <div key={index} className="Common-RowBox">
                                    <button
                                        className={this.props.Q8.includes(index.toString()) ? "Common-RowOneButton_Click" : "Common-RowOneButton"}
                                        value={index}
                                        onClick={ e => this.props.q8AnsChanged(e.target.value) }
                                    >{item[0]}
                                    </button>
                                </div>
                            );
                        })
                    }
                    <div className="Common-RowBox">
                        {this._showTopicButton()}
                    </div>
                </div>
            );
        }
    }
    
    /******************** 第九題 ********************/
    _uiTopicNum9 = () => {
        if (this.state.topicNum === 9) {
            return (
                <div>
                    <div className="Common-RowBox topicTitle">
                        <p>第九題</p>
                        <p>下列何者為您常使用的理財工具? (可複選)</p>
                    </div>
                    {
                        optionList.topic9.map((item, index) => {
                            return (
                                <div key={index} className="Common-RowBox">
                                    <button
                                        className={this.props.Q9.includes(index.toString()) ? "Common-RowOneButton_Click" : "Common-RowOneButton"}
                                        value={index}
                                        onClick={ e => this.props.q9AnsChanged(e.target.value) }
                                    >{item[0]}
                                    </button>
                                </div>
                            );
                        })
                    }
                    <div className="Common-RowBox">
                        {this._showTopicButton()}
                    </div>
                </div>
            );
        }
    }
    
    /******************** 第十題 ********************/
    _uiTopicNum10 = () => {
        if (this.state.topicNum === 10) {
            return (
                <div>
                    <div className="Common-RowBox topicTitle">
                        <p>第十題</p>
                        <p>投資資金來源? (可複選)</p>
                    </div>
                    {
                        optionList.topic10.map((item, index) => {
                            return (
                                <div key={index} className="Common-RowBox">
                                    <button
                                        className={this.props.Q10.includes(index.toString()) ? "Common-RowOneButton_Click" : "Common-RowOneButton"}
                                        value={index}
                                        onClick={ e => this.props.q10AnsChanged(e.target.value) }
                                    >{item[0]}
                                    </button>
                                </div>
                            );
                        })
                    }
                    <div className="Common-RowBox">
                        {this._showTopicButton()}
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container Common-Container">
                    <div className="Common-TitleBox">
                        <img src={require("../../images/step2.png")} />
                    </div>
                    <div className="Common-TitleBox">
                        <h2>風險屬性評估</h2>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-LineDotted"></div>
                    </div>
                    {this._uiTopicNum0()}
                    {this._uiTopicNum1()}
                    {this._uiTopicNum2()}
                    {this._uiTopicNum3()}
                    {this._uiTopicNum4()}
                    {this._uiTopicNum5()}
                    {this._uiTopicNum6()}
                    {this._uiTopicNum7()}
                    {this._uiTopicNum8()}
                    {this._uiTopicNum9()}
                    {this._uiTopicNum10()}
                </div>
            </div>
        );
    }
}

export default withRouter(Step2);
/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';

/* css */
import SliderBarStyle from './slider_menu.scss';

/* data */
import MenuList from './slider_menu_List.json';

class SliderBar extends Component {
    render() {
        const btnPCVer = {
            "title": "切換電腦版",
            "url": "https://www.fundsyes.com/?mobileConvert"
        }

        return (
            <div className="slider-page">
            {
                Object.keys(MenuList).map((title) => {
                    if (title.match(/line/i)) {
                        return (
                            <div key={title}>
                                <hr />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={title}>
                                <h5>{title}</h5>
                                {
                                    Object.values(MenuList[title]).map((item, index) => {
                                        return (
                                            <a key={index} href={item.url}>
                                                <p>{item.title}</p>
                                            </a>
                                        );
                                    })
                                }
                            </div>
                        );
                    }
                })
            }
            <p className="btn-change-version">
                <a href={btnPCVer.url}>{btnPCVer.title}</a>
            </p>
            </div>
        );
    }
}

export default SliderBar;
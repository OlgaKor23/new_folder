import React from 'react'import './SystemReqsLocalization.scss'import { FC } from 'react'import en_icon from '../../../components/img/en_icon.svg';import ua_icon from '../../../components/img/ua_icon.svg';import ru_icon from '../../../components/img/ru_icon.svg';import it_icon from '../../../components/img/it_icon.svg';import br_icon from '../../../components/img/br_icon.svg';import de_icon from '../../../components/img/de_icon.svg';import pl_icon from '../../../components/img/pl_icon.svg';import jp_icon from '../../../components/img/jp_icon.svg';import fr_icon from '../../../components/img/fr_icon.svg';import kr_icon from '../../../components/img/kr_icon.svg';import cn_icon from '../../../components/img/cn_icon.svg';import sp_icon from '../../../components/img/sp_icon.svg';export const SystemReqsLocalization:FC = ({}) => {    return (        <div className="systemReqsLocalization">            <p className="systemReqsLocalization-heading">Localization:</p>            <div className="systemReqsLocalization-container">                <div className="systemReqsLocalization-block">                    <p className="systemReqsLocalization-heading">VOICE & SUBTITLES:</p>                    <div className="systemReqsLocalization-boxCountry">                        <div className="systemReqsLocalization-box">                            <img className="systemReqsLocalization-imgFlag" src={en_icon} alt=""/>                            <p className="systemReqsLocalization-country">English</p>                        </div>                        <div className="systemReqsLocalization-box">                            <img className="systemReqsLocalization-imgFlag" src={ua_icon} alt=""/>                            <p className="systemReqsLocalization-country">Ukrainian</p>                        </div>                        <div className="systemReqsLocalization-box">                            <img className="systemReqsLocalization-imgFlag" src={ru_icon} alt=""/>                            <p className="systemReqsLocalization-country">Russian</p>                        </div>                    </div>                </div>                <p className="systemReqsLocalization-heading">SUBTITLES only:</p>                <div>                    <div className="systemReqsLocalization-box">                        <div className="systemReqsLocalization-boxCountrySubonly">                            <div className="systemReqsLocalization-box">                                <img className="systemReqsLocalization-imgFlag" src={pl_icon} alt=""/>                                <p className="systemReqsLocalization-country">Poland</p>                            </div>                            <div className="systemReqsLocalization-box">                                <img className="systemReqsLocalization-imgFlag" src={it_icon} alt=""/>                                <p className="systemReqsLocalization-country">Italian</p>                            </div>                            <div className="systemReqsLocalization-box">                                <img className="systemReqsLocalization-imgFlag" src={br_icon} alt=""/>                                <p className="systemReqsLocalization-country">Brazilian Portuguese</p>                            </div>                            <div className="systemReqsLocalization-box">                                <img className="systemReqsLocalization-imgFlag" src={de_icon} alt=""/>                                <p className="systemReqsLocalization-country">German</p>                            </div>                        </div>                        <div className="systemReqsLocalization-boxCountrySubonly">                            <div className="systemReqsLocalization-box">                                <img className="systemReqsLocalization-imgFlag" src={sp_icon} alt=""/>                                <p className="systemReqsLocalization-country">Spanish</p>                            </div>                            <div className="systemReqsLocalization-box">                                <img className="systemReqsLocalization-imgFlag" src={cn_icon} alt=""/>                                <p className="systemReqsLocalization-country">Chinese Simplified</p>                            </div>                            <div className="systemReqsLocalization-box">                                <img className="systemReqsLocalization-imgFlag" src={cn_icon} alt=""/>                                <p className="systemReqsLocalization-country">Chinese Traditional</p>                            </div>                            <div className="systemReqsLocalization-box">                                <img className="systemReqsLocalization-imgFlag" src={fr_icon} alt=""/>                                <p className="systemReqsLocalization-country">French</p>                            </div>                        </div>                        <div className="systemReqsLocalization-boxCountrySubonly">                            <div className="systemReqsLocalization-box">                                <img className="systemReqsLocalization-imgFlag" src={jp_icon} alt=""/>                                <p className="systemReqsLocalization-country">Japanese</p>                            </div>                            <div className="systemReqsLocalization-box">                                <img className="systemReqsLocalization-imgFlag" src={kr_icon} alt=""/>                                <p className="systemReqsLocalization-country">Korean</p>                            </div>                        </div>                    </div>                </div>            </div>        </div>    )};
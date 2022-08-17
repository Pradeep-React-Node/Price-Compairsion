import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Package = () => {
    const [visibleA, setVisibleA] = useState("table-row")
    const [visibleB, setVisibleB] = useState("none")
    const [visibleC, setVisibleC] = useState("none")
    const [visibleD, setVisibleD] = useState("none")
    const [visibleE, setVisibleE] = useState("none")
    const [visibleF, setVisibleF] = useState("none")
    const [visibleG, setVisibleG] = useState("none")
    const [visibleH, setVisibleH] = useState("none")
    const [visibleI, setVisibleI] = useState("none")
    const [visibleJ, setVisibleJ] = useState("none")
    const [visibleK, setVisibleK] = useState("none")
    const [visibleL, setVisibleL] = useState("none")
    const [visibleM, setVisibleM] = useState("none")
    const [visibleN, setVisibleN] = useState("none")
    const [visibleO, setVisibleO] = useState("none")
    const [visibleP, setVisibleP] = useState("none")
    const [visibleQ, setVisibleQ] = useState("none")
    const [visibleR, setVisibleR] = useState("none")
    const [visibleS, setVisibleS] = useState("none")
    const [visibleT, setVisibleT] = useState("none")
    const [visibleU, setVisibleU] = useState("none")
    const [visibleV, setVisibleV] = useState("none")
    const [visibleW, setVisibleW] = useState("none")
    const [visibleX, setVisibleX] = useState("none")
    const [visibleY, setVisibleY] = useState("none")

    const location = useLocation();
    const stateData = location?.state;
    const dollorspercentage = stateData?.percentage;
    const packagenamenew = stateData?.packagename;
    const productline = stateData?.productline;
    const addoption = stateData?.addoption;
    const saasalert = stateData?.saasalert;
    const pricedollor = stateData?.pricedollor;
    const productplan = stateData?.productplan;
    //console.log(dollorpercentage);
    const customData = stateData?.customState;
    console.log("state data", stateData);
    console.log("custom data", customData);
    console.log("packege name", packagenamenew);

    const plan = (productplan === "22" ? "Premium" : productplan === "6" ? "Basic" : productplan === "12.50" ? "Standard" : productplan === "10" ? "E1" : productplan === "36" ? "E3" : "E5")

    // Microsoft 365 for Business
    const condtionA = productline === "1" && productplan === "6" && addoption === "6" ? true : false
    const condtionB = productline === "1" && productplan === "6" && addoption === "9" ? true : false
    const condtionC = productline === "1" && productplan === "12.50" && addoption === "6" ? true : false
    const condtionD = productline === "1" && productplan === "12.50" && addoption === "9" ? true : false
    const condtionE = productline === "1" && productplan === "22" && addoption === "0" ? true : false
    const condtionF = productline === "1" && productplan === "22" && addoption === "9" ? true : false
    // Microsoft 365 for Enterprise
    const condtionG = productline === "1.0" && productplan === "36" && addoption === "0" ? true : false
    const condtionH = productline === "1.0" && productplan === "36" && addoption === "9" ? true : false
    const condtionI = productline === "1.0" && productplan === "57" && addoption === "0" ? true : false
    // Office 365 for Enterprise
    const condtionJ = productline === "1.00" && productplan === "10" && addoption === "6" ? true : false
    const condtionK = productline === "1.00" && productplan === "10" && addoption === "9" ? true : false
    const condtionL = productline === "1.00" && productplan === "36" && addoption === "6" ? true : false
    const condtionM = productline === "1.00" && productplan === "36" && addoption === "9" ? true : false
    const condtionN = productline === "1.00" && productplan === "57" && addoption === "6" ? true : false
    const condtionO = productline === "1.00" && productplan === "57" && addoption === "9" ? true : false

    return (
        <>

            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">Comparison Packages</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Comparison Packages</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="container add_sect-tt">
                <div class="row ">
                    <table class="table  dcf-table-bordered "  >
                        <thead>
                            <tr>
                                <td width={"22%"}></td>
                                <th scope="col"></th>

                                <th scope="col" style={{ background: "#f5ba7a" }} class={packagenamenew === 'Microsoft 365 for Business Standard Azure Active Directory Premium P1 (Add-on)' ? 'acive' : 'deactive'} ><b>Comparison Package</b></th>
                                <th scope="col" style={{ background: "#f5ba7a" }} class={packagenamenew === 'Microsoft 365 for Business Premium Azure Active Directory Premium P1 (Included)' ? 'acive' : 'deactive'}><b>Comparison Package</b></th>
                                <th scope="col" style={{ background: "#f5ba7a" }} class={packagenamenew === 'Office 365 for Enterprise E1 Azure Active Directory Premium P1 (Add-on)' ? 'acive' : 'deactive'}><b>Comparison Package</b></th>
                                <th scope="col" style={{ background: "#f5ba7a" }} class={packagenamenew === 'Microsoft 365 for Enterprise E3 Azure Active Directory Premium P1 (Included)' ? 'acive' : 'deactive'}><b>Comparison Package</b></th>
                                <th scope="col" style={{ background: "#f5ba7a" }} class={packagenamenew === 'Office 365 for Enterprise E5 Azure Active Directory Premium P1 (Add-on)' ? 'acive' : 'deactive'}><b>Comparison Package</b></th>
                                <th scope="col" style={{ background: "#f5ba7a" }} class={packagenamenew === 'Microsoft 365 for Enterprise E5 Azure Active Directory Premium P2 (Included)' ? 'acive' : 'deactive'}><b>Comparison Package</b></th>
                            </tr>
                        </thead>

                        <tr >
                            <th scope="row"></th>
                            <td className="addtd">Custom Package</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td data-label="Comparison Package">4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr  >
                            <th scope="row"></th>
                            <td className="addtd brline" style={{ textAlign:"center" }}>
                                {productline === "1" ? "Microsoft 365 for Business" : productline === "1.0" ? "Microsoft 365 for Enterprise" : "Office 365 for Enterprise"}&nbsp;  &nbsp;
                                {plan} &nbsp;
                                {addoption === "0" ? "Azure Active Directory Premium P1 (Included)" : addoption === "6" ? "Azure Active Directory Premium P1 (Add-on)" : addoption === "0.0" ? " Add On-(None)" :"Azure Active Directory Premium P2 (Add-on)"} </td>


                            <td className="brline">{packagenamenew === 'Microsoft 365 for Business Standard Azure Active Directory Premium P1 (Add-on)' ? <Link state={{ saasalert: saasalert, packagenamenew: packagenamenew, value: 18.50, dollorspercentage: dollorspercentage, stateData: stateData, plan: plan, productline:productline, addoption:addoption }} to="/single-package">Microsoft 365 for Business StandardAzure Active Directory Premium P1 (Add-on)</Link>
                                : <p>Microsoft 365 for Business Standard
                                    Azure Active Directory Premium P1 (Add-on)</p>}</td>
                            <td className="brline">{packagenamenew === 'Microsoft 365 for Business Premium Azure Active Directory Premium P1 (Included)' ? <Link state={{ saasalert: saasalert, packagenamenew: packagenamenew, value: 22, dollorspercentage: dollorspercentage, stateData: stateData, plan: plan, productline:productline, addoption:addoption }} to="/single-package">Microsoft 365 for Business
                                Premium
                                Azure Active Directory Premium P1 (Included)</Link> : <p>Microsoft 365 for Business
                                    Premium
                                    Azure Active Directory Premium P1 (Included)</p>}</td>
                            <td className="brline">{packagenamenew === 'Office 365 for Enterprise E1 Azure Active Directory Premium P1 (Add-on)' ? <Link state={{ saasalert: saasalert, packagenamenew: packagenamenew, value: 16, dollorspercentage: dollorspercentage, stateData: stateData, plan: plan , productline:productline, addoption:addoption}} to="/single-package">Office 365 for Enterprise
                                E1
                                Azure Active Directory Premium P1 (Add-on)</Link> : <p>Office 365 for Enterprise
                                    E1
                                    Azure Active Directory Premium P1 (Add-on)</p>}</td>
                            <td className="brline">{packagenamenew === 'Microsoft 365 for Enterprise E3 Azure Active Directory Premium P1 (Included)' ? <Link state={{ saasalert: saasalert, packagenamenew: packagenamenew, value: 36, dollorspercentage: dollorspercentage, stateData: stateData, plan: plan, productline:productline, addoption:addoption }} to="/single-package">Microsoft 365 for Enterprise
                                E3
                                Azure Active Directory Premium P1 (Included)</Link> : <p>Microsoft 365 for Enterprise
                                    E3
                                    Azure Active Directory Premium P1 (Included)</p>}</td>
                            <td className="brline">{packagenamenew === 'Office 365 for Enterprise E5 Azure Active Directory Premium P1 (Add-on)' ? <Link state={{ saasalert: saasalert, packagenamenew: packagenamenew, value: 44, dollorspercentage: dollorspercentage, stateData: stateData, plan: plan, productline:productline, addoption:addoption }} to="/single-package">Office 365 for Enterprise
                                E5
                                Azure Active Directory Premium P1 (Add-on)</Link> : <p>Office 365 for Enterprise
                                    E5
                                    Azure Active Directory Premium P1 (Add-on)</p>}</td>
                            <td className="brline">{packagenamenew === 'Microsoft 365 for Enterprise E5 Azure Active Directory Premium P2 (Included)' ? <Link state={{ saasalert: saasalert, packagenamenew: packagenamenew, value: 57, dollorspercentage: dollorspercentage, stateData: stateData, plan: plan, productline:productline, addoption:addoption }} to="/single-package">Microsoft 365 for Enterprise
                                E5
                                Azure Active Directory Premium P2 (Included)</Link> : <p>Microsoft 365 for Enterprise
                                    E5
                                    Azure Active Directory Premium P2 (Included)</p>}</td>
                        </tr>
                        <tr >
                            <th scope='row'>PRICING
                                (per person/month)</th>
                            <td style={{ background: "#c7dec3", textAlign:"center" }} className="addtd">{customData?.totalPrice === 0 ? "" : customData?.totalPrice && ("$" + customData?.totalPrice)}</td>
                            <td style={{ background: "#c7dec3", textAlign:"center" }} name='$18.50'> $18.50</td>
                            <td style={{ background: "#c7dec3", textAlign:"center" }} name='$22.00'> $22</td>
                            <td style={{ background: "#c7dec3", textAlign:"center" }} name='$16.00'> $16</td>
                            <td style={{ background: "#c7dec3", textAlign:"center" }} name='$36.00'> $36</td>
                            <td style={{ background: "#c7dec3", textAlign:"center" }} name='$18.50'> $44</td>
                            <td style={{ background: "#c7dec3", textAlign:"center" }} name='$18.50'> $57</td>
                        </tr>
                        <tr >
                            <th scope='row'>MARGIN $
                                (per person/month)</th>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }} className="addtd">{customData?.totalMarginDollar === 0 ? "" : customData?.totalMarginDollar && ("$" + customData?.totalMarginDollar?.toFixed(2))}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }}> {(18.50 / 100 * (dollorspercentage)).toFixed(2)}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }}> {(22 / 100 * (dollorspercentage)).toFixed(2)}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }}> {(16 / 100 * (dollorspercentage)).toFixed(2)}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }}> {(36 / 100 * (dollorspercentage)).toFixed(2)}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }}> {(44 / 100 * (dollorspercentage)).toFixed(2)}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }}> {(57 / 100 * (dollorspercentage)).toFixed(2)}</td>
                        </tr>
                        <tr >
                            <th>MARGIN %</th>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }} className="addtd">{(customData?.totalMarginParcent && (customData?.totalMarginParcent) === "NaN") ? "" : customData?.totalMarginParcent && (customData?.totalMarginParcent + "%")}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }}> {dollorspercentage + "%"}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }}> {dollorspercentage + "%"}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }}> {dollorspercentage + "%"}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }} data-label="Comparison Package"> {dollorspercentage + "%"}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }}> {dollorspercentage + "%"}</td>
                            <td style={{ background: "#e8f5e6", textAlign:"center" }}> {dollorspercentage + "%"}</td>
                        </tr>
                        <tbody>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleA(visibleA === "none" ? "table-row" : "none")}>
                                <th scope="col" >{(visibleA === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp;  Microsoft 365 Apps</th>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                            </tr>
                            <tr style={{ display: visibleA }}>
                                <th>Desktop client apps</th>
                                <td>{condtionA === true || condtionB === true ? "" : <b>●</b>}</td>
                                <td>●</td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleA }}>
                                <th>Office Mobile apps</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleA }}>
                                <th>Install apps on up to 5 PCs/Mac + 5 tablets + 5 smartphones</th>
                                <td>{condtionA === true || condtionB === true ? <b>(Mobile-only)</b> : <b>●</b>}</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleA }}>
                                <th>Office for the web</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleA }}>
                                <th>Vision for the web</th>
                                <td><b>●</b> </td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleA }}>
                                <th>Microsoft Editor premium features</th>
                                <td>{condtionA === true || condtionB === true || condtionJ === true || condtionK === true ? "" : <b>●</b>} </td>
                                <td>●</td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleA }}>
                                <th>Multilingual user interface for Office apps</th>
                                <td>{condtionA === true || condtionB === true || condtionJ === true || condtionK === true ? "" : <b>●</b>}</td>
                                <td>●</td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleB(visibleB === "none" ? "table-row" : "none")}>
                                <th  >{(visibleB === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Email, calendar, and scheduling</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Exchange Kiosk (2 GB mailbox)</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Exchange Plan 1 (50 GB mailbox)</th>
                                <td>{condtionG === true || condtionH === true || condtionI === true || condtionL === true || condtionM === true || condtionN === true || condtionO === true ? "" : <b>●</b>}</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Exchange Plan 2 (100 GB mailbox)</th>
                                <td>{condtionG === true || condtionH === true || condtionI === true || condtionL === true || condtionM === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Calendar</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Outlook desktop client</th>
                                <td>{condtionA === true || condtionB === true || condtionJ === true || condtionK === true ? "" : <b>●</b>}</td>
                                <td>●</td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Auto-expanding email archive</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionJ === true || condtionK === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Exchange Online Protection</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Public folder mailboxes</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Resource mailboxes</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Inactive mailboxes</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionE === true || condtionF === true || condtionJ === true || condtionK === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Microsoft Shifts</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleB }}>
                                <th>Microsoft Bookings</th>
                                <td>{condtionA === true || condtionB === true || condtionJ === true || condtionK === true ? "" : <b>●</b>}</td>
                                <td>●</td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleC(visibleC === "none" ? "table-row" : "none")}>
                                <th  >{(visibleC === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Meetings, calling, and chat</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleC }}>
                                <th>Microsoft Teams</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleC }}>
                                <th>Unlimited chat</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleC }}>
                                <th>Online meetings</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleC }}>
                                <th>Live Events</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleC }}>
                                <th>Webinars</th>
                                <td>{condtionA === true || condtionB === true ? "" : <b>●</b>}</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleC }}>
                                <th>Screen sharing and custom backgrounds</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleC }}>
                                <th>Record meetings</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleC }}>
                                <th>Priority notifications</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleC }}>
                                <th>Teams Phone</th>
                                <td>{condtionK === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleC }}>
                                <th>Audio Conferencing</th>
                                <td>{condtionK === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleD(visibleD === "none" ? "table-row" : "none")}>
                                <th  >{(visibleD === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Social, intranet, and storage</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleD }}>
                                <th>SharePoint Kiosk (2 GB OneDrive storage)</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleD }}>
                                <th>SharePoint Plan 1 (1 TB OneDrive storage)</th>
                                <td>{condtionG === true || condtionH === true || condtionI === true || condtionL === true || condtionM === true || condtionN === true || condtionO === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleD }}>
                                <th>SharePoint Plan 2 (unlimited OneDrive storage3)</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionE === true || condtionF === true || condtionJ === true || condtionK === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleD }}>
                                <th>Yammer Enterprise</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleD }}>
                                <th>Microsoft Viva Connections</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleE(visibleE === "none" ? "table-row" : "none")}>
                                <th >{(visibleE === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Knowledge, insights, and content</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleE }}>
                                <th>Microsoft Graph API</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleE }}>
                                <th>Microsoft Search</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleE }}>
                                <th>Microsoft Stream</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleE }}>
                                <th>Microsoft Forms</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleE }}>
                                <th>Microsoft Lists</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleE }}>
                                <th>Delve</th>
                                <td><b>●</b></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleF(visibleF === "none" ? "table-row" : "none")}>
                                <th >{(visibleF === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Analytics</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleF }}>
                                <th>Productivity Score</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleF }}>
                                <th>Secure Score</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleF }}>
                                <th>Compliance Management</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleF }}>
                                <th>Viva Insights - Personal insights</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleF }}>
                                <th>Power BI Pro</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleG(visibleG === "none" ? "table-row" : "none")}>
                                <th >{(visibleG === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Project and task management</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleG }}>
                                <th>Microsoft Planner</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleG }}>
                                <th>Microsoft To-Do</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleG }}>
                                <th>Briefing Email</th>
                                <td>{condtionA === true || condtionB === true ? "" : <b>●</b>}</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleH(visibleH === "none" ? "table-row" : "none")}>
                                <th >{(visibleH === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Automation, app building, and chatbots</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleH }}>
                                <th>Power Apps for Microsoft 365</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleH }}>
                                <th>Power Automate for Microsoft 365</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleH }}>
                                <th>Power Virtual Agent for Teams</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleH }}>
                                <th>Data verse for Teams</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleI(visibleI === "none" ? "table-row" : "none")}>
                                <th >{(visibleI === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Viva learning</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleI }}>
                                <th>Viva Learning in Teams</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleI }}>
                                <th>Create learning tabs in Teams channels</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleI }}>
                                <th>Search, share, and chat about learning content</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleI }}>
                                <th>Microsoft Learn and Microsoft 365 Training libraries + 125 top LinkedIn Learning courses</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleI }}>
                                <th>Organization-generated content with SharePoint and Viva Learning</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleJ(visibleJ === "none" ? "table-row" : "none")}>
                                <th >{(visibleJ === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Threat protection</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleJ }}>
                                <th>Microsoft Defender Antimalware</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleJ }}>
                                <th>Microsoft Defender Firewall</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleJ }}>
                                <th>Microsoft Defender Exploit Guard</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleJ }}>
                                <th>Microsoft Defender Credential Guard</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleJ }}>
                                <th>BitLocker and BitLocker To Go</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleJ }}>
                                <th>Windows Information Protection</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleJ }}>
                                <th>Microsoft Defender for Endpoint Plan 2</th>
                                <td>{condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleJ }}>
                                <th>Microsoft Defender for Identity</th>
                                <td>{condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleJ }}>
                                <th>Microsoft Defender for Office 365 Plan 2</th>
                                <td>{condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleJ }}>
                                <th>Application Guard for Office 365</th>
                                <td>{condtionE === true || condtionF === true || condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleJ }}>
                                <th>Safe Documents</th>
                                <td>{condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleK(visibleK === "none" ? "table-row" : "none")}>
                                <th >{(visibleK === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Cloud access security broker</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleK }}>
                                <th>Microsoft Defender for Cloud Apps</th>
                                <td>{condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleK }}>
                                <th>Microsoft Defender for Cloud Apps Discovery</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleK }}>
                                <th>Office 365 Cloud App Security</th>
                                <td>{condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleL(visibleL === "none" ? "table-row" : "none")}>
                                <th >{(visibleL === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Identity and access management</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>Azure Active Directory Premium Plan 1</th>
                                <td>{condtionD === true || condtionB === true || condtionI === true || condtionK === true || condtionM === true || condtionO === true ? "" : <b>●</b>}</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>Azure Active Directory Premium Plan 2</th>
                                <td>{condtionA === true || condtionC === true || condtionD === true || condtionE === true || condtionG === true || condtionJ === true || condtionL === true || condtionN === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>User Provisioning</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>Self Service Password Reset</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>Multi Factor Authentication</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>Conditional Access</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>Risk Based Conditional Access / Identity Protection</th>
                                <td>{condtionA === true || condtionC === true || condtionE === true || condtionG === true || condtionJ === true || condtionL === true || condtionN === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>Privileged Identity Management</th>
                                <td>{condtionA === true || condtionC === true || condtionE === true || condtionG === true || condtionJ === true || condtionL === true || condtionN === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>Access Reviews</th>
                                <td>{condtionA === true || condtionC === true || condtionE === true || condtionG === true || condtionJ === true || condtionL === true || condtionN === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>Entitlement Management</th>
                                <td>{condtionA === true || condtionC === true || condtionE === true || condtionG === true || condtionJ === true || condtionL === true || condtionN === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>On-premises Active Directory sync for SSO</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>Windows Hello for Business</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleL }}>
                                <th>Windows Store Access Management</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleM(visibleM === "none" ? "table-row" : "none")}>
                                <th >{(visibleM === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Endpoint and app management</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleM }}>
                                <th>Microsoft Intune</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleM }}>
                                <th>Mobile Device Management</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleM }}>
                                <th>Microsoft Endpoint Manager</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleM }}>
                                <th>Mobile application management</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleM }}>
                                <th>Windows AutoPilot</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleM }}>
                                <th>Group Policy support</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true || condtionL === true || condtionM === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleM }}>
                                <th>Shared computer activation for M365 Apps</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true || condtionL === true || condtionM === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleM }}>
                                <th>Endpoint Analytics</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleM }}>
                                <th>Cortana management</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleN(visibleN === "none" ? "table-row" : "none")}>
                                <th >{(visibleN === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Information Governance</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleN }}>
                                <th>Manual retention labels</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleN }}>
                                <th>Basic org-wide or location-wide retention policies</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionJ === true || condtionK === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleN }}>
                                <th>Rules-based automatic retention policies</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleN }}>
                                <th>Machine Learning-based retention</th>
                                <td>{condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleN }}>
                                <th>Teams message retention policies</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleN }}>
                                <th>Records Management</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleO(visibleO === "none" ? "table-row" : "none")}>
                                <th >{(visibleO=== "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Information protection</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Azure Information Protection Plan 1</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Azure Information Protection Plan 2</th>
                                <td>{condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Manual, default, and mandatory sensitivity labeling in Office 365</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionJ === true || condtionK === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Automatic sensitivity labeling in Office 365 apps</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Manual labeling with the AIP app and plugin</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Automatic labeling in the AIP plugin</th>
                                <td>{condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Automatic sensitivity labels in Exchange, SharePoint, and OneDrive</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Sensitivity labels based on advanced classification (ML, EDM)</th>
                                <td>{condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Sensitivity labeling for containers in Office 365</th>
                                <td>{condtionG === true || condtionH === true || condtionI === true || condtionL === true || condtionM === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>O365 Data Loss Prevention (DLP) for emails & files</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true || condtionL === true || condtionM === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>DLP for Teams chat</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Basic Office Message Encryption</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true || condtionL === true || condtionM === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Advanced Office Message Encryption</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleO }}>
                                <th>Customer Key for Office 365</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleP(visibleP === "none" ? "table-row" : "none")}>
                                <th >{(visibleP === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; eDiscovery and auditing</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleP }}>
                                <th>Content Search</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleP }}>
                                <th>Core eDiscovery (including Hold and Export)</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionJ === true || condtionK === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleP }}>
                                <th>Litigation Hold</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionJ === true || condtionK === true ? "" : <b>●</b>}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleP }}>
                                <th>Advanced eDiscovery</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleP }}>
                                <th>Basic Audit</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleP }}>
                                <th>Advanced Audit</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleQ(visibleQ === "none" ? "table-row" : "none")}>
                                <th >{(visibleQ === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Insider risk management</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleQ }}>
                                <th>Insider Risk Management</th>
                                <td>{condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleQ }}>
                                <th>Communication Compliance</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleQ }}>
                                <th>Information Barriers</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleQ }}>
                                <th>Customer Lockbox</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleQ }}>
                                <th>Privileged Access Management</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr >
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#dfe9f2",cursor:"pointer" }} onClick={() => setVisibleR(visibleR === "none" ? "table-row" : "none")}>
                                <th >{(visibleR === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Windows</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleR }}>
                                <th>Windows 10 Edition</th>
                                <td>{condtionE === true || condtionF === true ? <b>Business</b> : condtionG === true || condtionH === true || condtionI === true ? <b>Enterprise</b> : ""}</td>
                                <td></td>
                                <td>Business</td>
                                <td></td>
                                <td>Enterprise</td>
                                <td></td>
                                <td>Enterprise</td>
                            </tr>
                            <tr style={{ display: visibleR }}>
                                <th>Azure Virtual Desktop</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleR }}>
                                <th>Universal Print</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : ""}</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                                <td></td>
                                <td>●</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            {/* second sec  */}

                            <tr style={{ background: "#edb08c" }}>
                                <th scope="row">SUPPLEMENTAL LICENSES/FEATURES</th>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#f0dbd8" ,cursor:"pointer"}} onClick={() => setVisibleS(visibleS === "none" ? "table-row" : "none")}>
                                <th>{(visibleS === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Security and Compliance</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th scope="row">Microsoft 365 E5 Security</th>
                                <td>{condtionG === true || condtionH === true ? <b>+</b> : condtionI === true ? <b>●</b> : <b>N/A</b>}</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>+</td>
                                <td>N/A</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th scope="row">Microsoft 365 E5 Compliance</th>
                                <td>{condtionG === true || condtionH === true ? <b>+</b> : condtionI === true ? <b>●</b> : <b>N/A</b>}</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>+</td>
                                <td>N/A</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th scope="row">Microsoft 365 F5 Security</th>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th scope="row">Microsoft 365 F5 Compliance</th>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Microsoft 365 F5 Security + Compliance</th>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Microsoft 365 E5 Info Protection and Governance</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : <b>+</b>} </td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Microsoft 365 E5 Insider Risk Management</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Microsoft 365 E5 eDiscovery and Audit</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Microsoft Defender for Identity</th>
                                <td>{condtionI === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Microsoft Defender for Office 365 Plan 1</th>
                                <td>{condtionE === true || condtionF === true || condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>●</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Microsoft Defender for Office 365 Plan 2</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Microsoft Defender for Cloud Apps</th>
                                <td>{condtionI === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>App governance add-on for Microsoft Defender for Cloud Apps</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Microsoft Defender for Endpoint Plan 1</th>
                                <td>{condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                                <td>+</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Microsoft Defender for Endpoint Plan 2</th>
                                <td>{condtionI === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Premium Assessments add-on for Compliance Manager</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Privacy Management for Microsoft 365 - risk</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionE === true || condtionF === true ? <b>N/A</b> : <b>+</b>}</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Privacy Management for Microsoft 365 - subjects rights request</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionE === true || condtionF === true ? <b>N/A</b> : <b>+</b>}</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Compliance Program for Microsoft Cloud</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionE === true || condtionF === true ? <b>N/A</b> : <b>+</b>}</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Office 365 Data Loss Prevention</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionJ === true || condtionK === true ? <b>+</b> : <b>●</b>}</td>
                                <td>+</td>
                                <td>●</td>
                                <td>+</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Exchange Archiving</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionJ === true || condtionK === true ? <b>+</b> : <b>●</b>}</td>
                                <td>+</td>
                                <td>●</td>
                                <td>+</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Azure Active Directory Premium Plan 1</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>●</td>
                                <td>+</td>
                                <td>●</td>
                                <td>+</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Azure Active Directory Premium Plan 2</th>
                                <td>{condtionI === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>Microsoft Intune</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>●</td>
                                <td>+</td>
                                <td>●</td>
                                <td>+</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleS }}>
                                <th>10-year Audit Log Retention</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>+</b> : <b>N/A</b>}</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr class="even">
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#f0dbd8" ,cursor:"pointer"}} onClick={() => setVisibleT(visibleT === "none" ? "table-row" : "none")}>
                                <th>{(visibleT === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Teams Services</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleT }}>
                                <th>Audio Conferencing</th>
                                <td>●</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleT }}>
                                <th>Extended Dial-out Minutes to US and Canada</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleT }}>
                                <th>Teams Phone3</th>
                                <td>●</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleT }}>
                                <th>Domestic Calling Plan</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleT }}>
                                <th>Domestic Calling 240 Minute Plan</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleT }}>
                                <th>Domestic Calling 120 Minute Plan</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleT }}>
                                <th>International Calling Plan (includes Domestic Plan)</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleT }}>
                                <th>Teams Phone with Calling Plan6</th>
                                <td>N/A</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>N/A</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleT }}>
                                <th>Business Voice7</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr class="odd">
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#f0dbd8" ,cursor:"pointer"}} onClick={() => setVisibleU(visibleU === "none" ? "table-row" : "none")}>
                                <th>{(visibleU === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Microsoft Viva</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleU }}>
                                <th>Viva Topics</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleU }}>
                                <th>Viva Insights</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleU }}>
                                <th>Viva Insights Capacity1</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleU }}>
                                <th>Viva Learning</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleU }}>
                                <th>Viva suite</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleU }}>
                                <th>Viva suite with Glint add-on</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr class="odd">
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#f0dbd8" ,cursor:"pointer"}} onClick={() => setVisibleV(visibleV === "none" ? "table-row" : "none")}>
                                <th>{(visibleV === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Content Services</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleV }}>
                                <th>SharePoint Syntex</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleV }}>
                                <th>Extra Graph Connector Capacity</th>
                                <td>{condtionA === true || condtionB === true || condtionC === true || condtionD === true || condtionE === true || condtionF === true || condtionJ === true || condtionK === true ? <b>N/A</b> : <b>+</b>}</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr class="odd">
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#f0dbd8" ,cursor:"pointer"}} onClick={() => setVisibleW(visibleW === "none" ? "table-row" : "none")}>
                                <th>{(visibleW === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Storage</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleW }}>
                                <th>Office 365 Extra File Storage</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleW }}>
                                <th>eDiscovery Storage</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr class="odd">
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#f0dbd8" ,cursor:"pointer"}} onClick={() => setVisibleX(visibleX === "none" ? "table-row" : "none")}>
                                <th>{(visibleX === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Power Platform</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleX }}>
                                <th>Power BI Pro</th>
                                <td>{condtionI === true || condtionN === true || condtionO === true ? <b>●</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr style={{ display: visibleX }}>
                                <th>Power BI Premium</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleX }}>
                                <th>Power Apps per-app (1 app/user/month)</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleX }}>
                                <th>Power Apps per-user  (unlimited apps/user/month)</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleX }}>
                                <th>Power Automate per-user (unlimited flows/user/month)</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleX }}>
                                <th>Power Automate per-user w/ Unattended RPA (unlimited flows + 5K AI Builder credits/user/month)</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleX }}>
                                <th>Power Automate per-flow (5 flows/month for unlimited users)</th>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr class="even">
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ background: "#f0dbd8" ,cursor:"pointer"}} onClick={() => setVisibleY(visibleY === "none" ? "table-row" : "none")}>
                                <th>{(visibleY === "none" ? <i class="fa-solid fa-plus"></i> :<i class="fa-solid fa-minus"></i> )} &nbsp; Other</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ display: visibleY }}>
                                <th>Scheduler1</th>
                                <td>{condtionA === true || condtionB === true ? <b>N/A</b> : <b>+</b>}</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleY }}>
                                <th>Universal Print Volume Add-on (500 print jobs)2</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>+</b> : <b>N/A</b>}</td>
                                <td>N/A</td>
                                <td>+</td>
                                <td>N/A</td>
                                <td>+</td>
                                <td>N/A</td>
                                <td>+</td>
                            </tr>
                            <tr style={{ display: visibleY }}>
                                <th>High Efficiency Video Codec (HEVC)2</th>
                                <td>{condtionE === true || condtionF === true || condtionG === true || condtionH === true || condtionI === true ? <b>+</b> : <b>N/A</b>}</td>
                                <td>N/A</td>
                                <td>+</td>
                                <td>N/A</td>
                                <td>+</td>
                                <td>N/A</td>
                                <td>+</td>
                            </tr>
                            <tr class="odd">
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

};

export default Package;
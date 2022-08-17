import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [productline, setProductLine] = useState(false);
    const [productplan, setProductPlan] = useState(false);
    const [addoption, setAddOption] = useState(false);
    const [pricedollor, setPriceDollor] = useState();
    const [dPercenatge, setDPercenatge] = useState();
    const [packagename, setPackageName] = useState(false);
    const [saasalert, setSaasAlert] = useState();
    const [alertStatus, setAlertStatus] = useState("");
    const [error, setError] = useState("1")

  
      useEffect(() => {
        setProductLine((window.localStorage.getItem('productLine')));
        setProductPlan((window.localStorage.getItem('productPlan')));
        setAddOption((window.localStorage.getItem('addoption')));
        setDPercenatge((window.localStorage.getItem('dPercenatge')));
      }, []);

      useEffect(() => {
        window.localStorage.setItem('productLine', productline);
        window.localStorage.setItem('productPlan', productplan);
        window.localStorage.setItem('addoption', addoption);
        window.localStorage.setItem('dPercenatge', dPercenatge);
    
      }, [productline, productplan,addoption, dPercenatge]);



    // custam pakage calculation start from here 
    // const totalPrice = parseInt(addoption) + parseInt(pricedollor) + (productline === "1" ? parseInt(productplan) : 0);
    const totalPrice = parseInt(addoption) + parseInt(pricedollor) + parseInt(productplan);
    console.log("total price", totalPrice);
    console.log("sassAlertMargin", pricedollor);
    const microsoftAddOnMargin = ((addoption) / 100 * (dPercenatge))?.toFixed(3)
    console.log("microsoftAddOnMargin", microsoftAddOnMargin);
    // const microsoftBaseMargin = (productline === "1" ? (parseInt(productplan) / 100 * (dPercenatge))?.toFixed(3) : 0)
    const microsoftBaseMargin = (parseInt(productplan) / 100 * (dPercenatge))?.toFixed(3)
    console.log("microsoftBaseMargin", microsoftBaseMargin);
    const totalMarginDollar = (microsoftAddOnMargin ? (parseFloat(microsoftAddOnMargin)) : 0) + (saasalert ? (parseFloat(saasalert)) : 0) + (microsoftBaseMargin ? (parseFloat(microsoftBaseMargin)) : 0)
    console.log("totalMarginDollar", totalMarginDollar?.toFixed(2));
    const totalMarginParcent = (totalMarginDollar / totalPrice * 100)?.toFixed(2);
    const totalMarginParcent2 = (microsoftAddOnMargin / totalPrice * 100)?.toFixed(2);

    console.log("totalMarginParcent", addoption, pricedollor);
    //  End Here 
    const submit = () => {
        if (!productplan) {
            setError("2")
        } else if (!productplan) {
            setError("2")
        } else if (!addoption) {
            setError("2")
        } else if (!dPercenatge) {
            setError("2")
        } else if (!packagename) {
            setError("2")
        } else if (!saasalert) {
            setError("2")
        } 
        else if (alertStatus==="yes") {
            setError("2")
            if(!pricedollor){
                setError("2")
            }
        } 
        else {
            setError("3")
        }
    }

    const statusData = (data) => {
        setAlertStatus(data)
        if (data === "0") {
            setPriceDollor(0)
        }
    }
    const takeData = (data) => {
        setSaasAlert(data - .50)
        if (data) {
            setPriceDollor(data)
        }
    }
    const productLineChange = (data) => {
        setProductLine(data)
        setProductPlan(false)
        setAddOption(false)
    }
    const productPlanChange = (data) => {
        setProductPlan(data)
        setAddOption(false)
    }

    console.log("ssassAlaert data", productline);
    const customState = { totalPrice: totalPrice, sassAlertMargin: saasalert, microsoftAddOnMargin: microsoftAddOnMargin, microsoftBaseMargin: microsoftBaseMargin, totalMarginDollar: totalMarginDollar, totalMarginParcent: totalMarginParcent }
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <section className="intro">
                        <div className="row g-4 align-middle">
                            <div className="col-sm-12 col-md-6 columns">
                                <h1>Protect &amp; Monetize Your Clients' SaaS Applications</h1>
                                <p>MSP Exclusive Platform for Unified Monitoring and Alerting of Core Business SaaS Applications.</p>
                                <button class="btn btn-primary"><a href="https://manage.saasalerts.com/sign-up" target="_blank">Start free Trial</a></button>
                            </div>
                            <div className="col-sm-12 col-md-6 columns">
                                <img src="assets/img/saas_homepage_wheel_graphic.png" alt="SaaS Alerts" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container pt-5">
                    <div className="row g-4 addcomparesec">
                        <h1>Microsoft Security Packaging Calculator for MSPs</h1>
                        <h3>Microsoft</h3>
                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Product Line</label>
                            <select value={productline}
                                onChange={(e) => productLineChange(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option hidden>Please Select Product Line</option>
                                <option value="1">Microsoft 365 for Business</option>
                                <option value="1.0">Microsoft 365 for Enterprise</option>
                                <option value="1.00">Office 365 for Enterprise</option>
                            </select>
                            {error === "2" && (productline===false) && <span style={{ color: "red" }}>Please Select Product</span>}
                        </div>

                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Product Plans</label>
                          
                            <select value={productplan}
                                onChange={(e) => productPlanChange(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option hidden>Please Select Product Plans</option>
                                {productline==="1" && <option value="6">Basic</option>}
                                {productline==="1" && <option value="12.50">Standard</option>}
                                {productline==="1" && <option value="22">Premium</option>}
                                {productline==="1.00" && <option value="10">E1</option>}
                                {productline==="1.00" || productline==="1.0"? <option value="36">E3</option>:""}
                                {productline==="1.00" || productline==="1.0"? <option value="57">E5</option>:""}
                            </select>
                            {error === "2" && (productplan===false) && <span style={{ color: "red" }}>Please Product Plans</span>}
                        </div>
                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Add-On Options</label>
                            <select value={addoption}
                                onChange={(e) => setAddOption(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option hidden>Please Select Add-On Options</option>
                                {(productline==="1" &&( productplan==="6" || productplan==="12.50")) || (productline==="1.00" &&( productplan==="10" || productplan==="36" || productplan==="57"))? <option value="0.0">None</option>:""}

                               {((productplan==="22" || productplan==="36")) && (productline !=="1.00")? <option value="0">Azure Active Directory Premium P1 (Included)</option>:""}

                               {( ( productline==="1.0" && productplan==="57")) ? <option value="0">Azure Active Directory Premium P2 (Included)</option>:""}

                               { (productline==="1" && (productplan ==="6" || productplan==="12.50"))||(productline==="1.00") ?<option value="6">Azure Active Directory Premium P1 (Add-on)</option>:""}

                            {productplan?(productline==="1" && productplan==="57") || (productline==="1.0" && productplan==="57")?"":<option value="9">Azure Active Directory Premium P2 (Add-on)</option>:""} 

                            </select>
                            {error === "2" && (addoption===false) && <span style={{ color: "red" }}>Please Select Add-On Options</span>}
                        </div>
                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Reseller Discount</label>
                            <select value={dPercenatge}
                                onChange={(e) => setDPercenatge(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option hidden>Please Select Reseller Discount</option>
                                <option value="20">CSP Indirect 20%</option>
                                <option value="19">19%</option>
                                <option value="18">18%</option>
                                <option value="17">17%</option>
                                <option value="16">16%</option>
                                <option value="15">CSP Indirect 15%</option>
                                <option value="14">14%</option>
                                <option value="13">13%</option>
                                <option value="12">12%</option>
                                <option value="11">11%</option>
                                <option value="10">10%</option>
                            </select>
                            {error === "2" && !dPercenatge && <span style={{ color: "red" }}>Please Select Reseller Discount</span>}
                        </div>
                        <h3>SaaS Alert</h3>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Saas Alert Inclusion</label>
                            <select value={alertStatus}
                                onChange={(e) => statusData(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option hidden>Please Select Saas Alert Inclusion</option>
                                <option value="yes">Yes</option>
                                <option value="0">No</option>
                            </select>
                            {error === "2" && !alertStatus && <span style={{ color: "red" }}>Please Select Saas Alert Inclusion</span>}
                        </div>
                        {alertStatus === "yes" ?
                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <label>Enter Saas Alert Price $</label>
                                <input type="number" value={pricedollor} onChange={(e) => takeData(e.target.value)} class="form-control " aria-describedby="numberHelp" placeholder="Enter price" />
                                {error === "2" && !saasalert && <span style={{ color: "red" }}>Please Enter Saas Alert Price</span>}
                            </div> : ""}
                        {/* {saasalert === "2.50" ? */}
                        {/* <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <label></label>
                            <div style={{
                                border: "1px solid #0000002b",
                                height: "40px",
                                borderRadius: "6px",
                                paddingTop: "0.30rem",
                                paddingBottom: "0.25rem",
                                paddingLeft: "0.5rem",
                                fontSize: ".875rem"
                            }}>SaaS Alert Price  $3 are applied.</div>
                        </div>  */}
                        {/* : ""} */}

                        <h3>Popular Microsoft Packages</h3>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Popular Microsoft Packages</label>
                            <select value={packagename}
                                onChange={(e) => setPackageName(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option hidden>Please Select Popular Microsoft Packages</option>
                                <option value='Microsoft 365 for Business Standard Azure Active Directory Premium P1 (Add-on)'>Microsoft 365 for Business Standard Azure Active Directory Premium P1 (Add-on)</option>
                                <option value='Microsoft 365 for Business Premium Azure Active Directory Premium P1 (Included)'>Microsoft 365 for Business Premium Azure Active Directory Premium P1 (Included)</option>
                                <option value='Office 365 for Enterprise E1 Azure Active Directory Premium P1 (Add-on)'>Office 365 for Enterprise E1 Azure Active Directory Premium P1 (Add-on)</option>
                                <option value='Microsoft 365 for Enterprise E3 Azure Active Directory Premium P1 (Included)'>Microsoft 365 for Enterprise E3 Azure Active Directory Premium P1 (Included)</option>
                                <option value='Office 365 for Enterprise E5 Azure Active Directory Premium P1 (Add-on)'>Office 365 for Enterprise E5 Azure Active Directory Premium P1 (Add-on)</option>
                                <option value='Microsoft 365 for Enterprise E5 Azure Active Directory Premium P2 (Included)'>Microsoft 365 for Enterprise E5 Azure Active Directory Premium P2 (Included)</option>
                            </select>
                            {error === "2" && (packagename===false) && <span style={{ color: "red" }}>Please Select Popular Microsoft Packages</span>}
                        </div>
                        <div className="col-lg-12 col-md-12 wow fadeInUp text-center" data-wow-delay="0.5s" >
                            <button class="btn btn-primary" onClick={submit}>
                                {(productplan && productplan && addoption && dPercenatge && packagename  && alertStatus && (pricedollor===0?!pricedollor:pricedollor) ) ?
                             <Link to="/package" state={{ customState: customState, percentage: dPercenatge, packagename: packagename, productline: productline, productplan: productplan, addoption: addoption, saasalert: saasalert, pricedollor: pricedollor }}>Submit</Link> : <>Submit</>}</button>
                               {/* use for the cler local storeg  <button class="btn btn-primary" onClick={submit}> */}
                                {/* Reset
                             </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Home;



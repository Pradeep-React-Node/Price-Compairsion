import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

const PDFGenerate = () => {

    const location = useLocation();
    const stateData = location?.state;
    const productLine = stateData?.stateData?.stateData?.productline;
    const productPlan = stateData?.stateData?.stateData?.productplan;
    const addOption = stateData?.stateData?.stateData?.addoption;
    const saasalert = stateData?.stateData?.stateData?.saasalert;
    console.log("faxasX", stateData);

    const generatePDF = () => {
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#content"), {
            callback: function (pdf) {
                //var pageCount = doc.internal.getNumberOfPages();
                //pdf.deletePage(pageCount);
                pdf.save("package.pdf");
            }
        });
    };
    console.log("know thw lone", stateData)
    return (
        <>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">PDF Generate</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">PDF Generate</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container " id='content'>
                <div class="row">
                    <div class="col-md-12">
                        <div className="col-md-12 text-center">
                            <p className="sect_mt_title" style={{ 'paddingBottom': '20px' }}>	We have selected a custom package that is right-sized <br /> for your unique security, productivity, and budgetary requirements.</p>
                            <p className="sect_hn_title" style={{}}>Your custom package is comprised of:</p>
                            <p className="sect_gm_title" style={{ 'color': 'green', 'padding': '2px 0', 'lineHeight': '' }}>{productLine === "1" ? "Microsoft 365 for Business" : productLine === "1.0" ? "Microsoft 365 for Enterprise" : "Office 365 for Enterprise"} <br />
                                {stateData.stateData.plan} <br />
                                and <br />
                                {addOption === "0" ? "Azure Active Directory Premium P1 (Included)" : addOption === "6" ? "Azure Active Directory Premium P1 (Add-on)" : addOption === "0.0" ? " Add On-(None)" : "Azure Active Directory Premium P2 (Add-on)"} <br />
                                {saasalert ? `coupled with 
                                the protectionof Microsoft Security Plan`: ""}
                            </p>
                            <p className="sect_n_title" style={{ 'fontWeight': 'normal' }}>Priced at</p>
                            <p className="sect_g_title" style={{ 'color': 'green' }}>${stateData?.totalValue?.toFixed(2)}</p>
                            <p className="sect_n_title" style={{ 'fontWeight': 'normal' }}>per user, per month, you'll save</p>
                            <p className="sect_g_title" style={{ 'color': 'green' }}>${!stateData?.totalValue ? "0" : Math.abs(stateData?.diffValue?.toFixed(2))}</p>
                            <p className="sect_n_title" style={{ 'fontWeight': 'normal' }}>over popular packages such as</p>
                            <h5>{stateData?.stateData?.packagenamenew}</h5>
                            <p className="lastsect" style={{ 'fontWeight': 'lighter', 'paddingTop': '20px', 'wordSpacing': '6px' }}>In addition to savings, you'll receive the essential<br /> security features offered by Microsoft,<br /> supplemented by a third party solution objective,<br /> constant, real-time monitoring of the SaaS<br /> applications that are critical to small-to-medium<br /> businesses like yours.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div class="row">
                    <div className="col-lg-12 col-md-12 wow fadeInUp text-left addml_sl" data-wow-delay="0.5s" style={{ "paddinTop": '20px', 'textAlign': 'center', 'letterSpacing': '2px' }}>
                        <button onClick={generatePDF} class="btn btn-primary">Generate PDF</button>
                    </div>
                </div>
            </div>
        </>
    );

};

export default PDFGenerate;
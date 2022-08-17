import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SinglePackage = () => {

    const location = useLocation();
    const stateData = location?.state;
    const packagenamenew = stateData?.packagenamenew;
    const dollorspercentage = stateData?.dollorspercentage;
    const productline = stateData?.productline;
    const addoption = stateData?.addoption;
    const value = stateData?.value;
    const saasalertMargin = (stateData?.saasalert);
    const saasalertPrice = parseFloat(stateData?.stateData?.pricedollor);
    const customData = stateData?.stateData?.customState;
    // console.log(" from the props", customData);
    // console.log("data from the saasalert", saasalertMargin,saasalertPrice);
    let percent = (saasalertPrice / 100)
    console.log("singlepackage log", customData,stateData);
    useEffect(() => {
        window.scrollTo(0, 100)
    }, [])
    return (
        <>
            <div className=''>
                <div className="container-fluid page-header py-5 mb-5 wow fadeIn " data-wow-delay="0.1s" style={{ display: 'none' }}>
                    <div className="container py-5">
                        <h1 className="display-1 text-white animated slideInDown">Microsoft 365 for BusinessStanadardAzure Active Directory Premium P1(Add-on)</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb text-uppercase mb-0">
                                <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                                <li className="breadcrumb-item text-primary active" aria-current="page">Microsoft 365 for BusinessStanadardAzure Active Directory Premium P1(Add-on)</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div class="container add_sect-tt">
                    <div class="row">
                        <div class="add_single_cls">
                            <h1>Microsoft Package Comparison Summary for MSPs</h1>
                            <h3>The Custom Package you selected bears the following financial breakdown:</h3>
                            <table class="table dcf-table-bordered dcf-table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Price</td>
                                        <td>Margin ($)</td>
                                        <td>Margin (%)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Package (Total)</th>
                                        <td className="addtd">{customData?.totalPrice ? ("$ " + customData?.totalPrice) : ""}</td>
                                        <td className="addtd">{customData?.totalMarginDollar ? ("$ " + customData?.totalMarginDollar?.toFixed(2)) : ""}</td>
                                        <td className="addtd">{customData?.totalPrice ? customData?.totalMarginParcent + " %" : ""}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Microsoft Base</th>
                                        <td>{customData?.microsoftBaseMargin ? ("$ " + stateData?.stateData?.productplan) : ""}</td>
                                        <td>{customData?.microsoftBaseMargin ? ("$ " + customData?.microsoftBaseMargin) : ""}</td>
                                        <td>{customData?.microsoftBaseMargin ? stateData?.stateData?.percentage + " %" : ""}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Microsoft Add-on</th>
                                        <td>{customData?.microsoftAddOnMargin ? ("$ " + stateData?.stateData?.addoption) : ""}</td>
                                        <td>{customData?.microsoftAddOnMargin ? ("$ " + customData?.microsoftAddOnMargin) : ""}</td>
                                        <td>{customData?.microsoftAddOnMargin ? stateData?.stateData?.percentage + " %" : ""}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">SaaS Alerts</th>
                                        <td>{!saasalertPrice ? "" : ("$ " + saasalertPrice)}</td>
                                        <td>{!saasalertPrice ? "" : ("$ " + saasalertMargin)}</td>
                                        <td>{!saasalertPrice ? "" : ((saasalertMargin) / (percent))?.toFixed(2) + " %"}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="add_single_cls_nl">
                            <h2>Side-by-side, here's how it stacks up to the Comparison Package:</h2>
                            <table class="table  dcf-table-bordered dcf-table-striped ">
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td className="brline"> {productline === "1" ? "Microsoft 365 for Business" : productline === "1.0" ? "Microsoft 365 for Enterprise" : "Office 365 for Enterprise"}&nbsp;  &nbsp;
                                            {stateData.plan} &nbsp;
                                            {addoption === "0" ? "Azure Active Directory Premium P1 (Included)" : addoption === "6" ? "Azure Active Directory Premium P1 (Add-on)" :addoption === "0.0" ? " Add On-(None)" : "Azure Active Directory Premium P2 (Add-on)"}</td>
                                        <td className="brline">{packagenamenew}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Custom Package</td>
                                        <td>Comparison Package</td>
                                        <td>Difference</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Pricing</th>
                                        <td className="addtd">{customData?.totalPrice ? ("$ " + customData?.totalPrice) : ""}</td>
                                        <td className="addtd">{customData?.totalPrice ? ("$ " + (value)) : ""}</td>
                                        <td className="addtd">{(customData?.totalPrice ? ("$ " + (customData?.totalPrice - value)) : "")}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Margin $</th>
                                        <td className="addtd">{customData?.totalMarginDollar ? ("$ " + customData?.totalMarginDollar?.toFixed(2)) : ""}</td>
                                        <td className="addtd">{customData?.totalMarginDollar ? ("$ " + (value / 100 * (dollorspercentage)).toFixed(2)) : ""}</td>
                                        <td className="addtd">{customData?.totalMarginDollar ? ("$ " + (customData?.totalMarginDollar - (value / 100 * (dollorspercentage)))) : ""}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Margin %</th>
                                        <td className="addtd">{customData?.totalPrice ? (customData?.totalMarginParcent + " %") : ""}</td>
                                        <td className="addtd">{customData?.totalPrice ? (dollorspercentage + " %") : ""}</td>
                                        <td className="addtd">{customData?.totalPrice ? ((customData?.totalMarginParcent - dollorspercentage).toFixed(2) + " %") : ""}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="cont-add">
                            <h3>Security packaging tip:</h3>
                            <p>Because you have selected Business Premium + Azure Active Directory P1 + SaaS Alerts for your package, you're not only offering more robust security by bridging cloud app security gaps with SaaS Alerts,
                                you're making more margin than if you had instead selected the same package without SaaS Alerts, and offering price savings for equivalent practical security features of E3 or E5.</p>
                            <h3>Packaging implications of SaaS Alerts:</h3>

                            <p>By adding SaaS Alerts to your package, you're offering your clients an additional, critical layer of protection. </p>

                            <p>SaaS application monitoring through SaaS Alerts is specifically aimed at safeguarding access to the sensitive data residing in the cloud-based tools
                                responsible for driving your clients' daily operations.</p>

                            <p>Enabling constant, real-time monitoring of SaaS applications, SaaS Alerts delivers unique benefits to small-to-medium businesses, such as:</p>

                            <b>PURPOSE-BUILT</b>
                            <p>Detects threats that your SaaS application vendors would otherwise overlook, offering unbiased protection for the specific needs of small businesses.</p>

                            <b>INTELLIGENT</b>
                            <p>Leverages automation to identify risk drivers and expedite remediation, while alerts may be fine tuned to address your risk sensitivity.</p>

                            <b>CONNECTED</b>
                            <p>Provides comprehensive alerting across all of your business-critical SaaS applications, instead of limiting monitoring to one app at a time.</p>

                            <p style={{ alignItems: "center", justifyContent: "center", display: "flex" }}><button className='btn btn-primary'><Link state={{ totalValue: customData?.totalPrice, diffValue: customData?.totalPrice - value, stateData: stateData }} to="/pdf-generate">Respective to the Comparison Package, your Custom Package...	</Link></button></p>
                        </div>
                    </div>
                    {packagenamenew === 'Microsoft 365 for Enterprise E5 Azure Active Directory Premium P2 (Included)' ?
                        <div className='row'>
                            <div className="col-md-6 sgg_abc">
                                <h3>Excludes these Microsoft features:</h3>
                                <p>Teams Phone</p>
                                <p>Audio Conferencing</p>
                                <p>Power BI Pro</p>
                                <p>Microsoft Defender for Endpoint Plan 2</p>
                                <p>Microsoft Defender for Identity</p>
                                <p>Microsoft Defender for Office 365 Plan 2</p>
                                <p>Application Guard for Office 365</p>
                                <p>Safe Documents</p>
                                <p>Microsoft Defender for Cloud Apps</p>
                                <p>Azure Active Directory Premium Plan 2</p>
                                <p>Risk Based Conditional Access / Identity Protection</p>
                                <p>Privileged Identity Management</p>
                                <p>Access Reviews</p>
                                <p>Entitlement Management</p>
                                <p>Rules-based automatic retention policies</p>
                                <p>Machine Learning-based retention</p>
                                <p>Records Management</p>
                                <p>Azure Information Protection Plan 2</p>
                                <p>Automatic sensitivity labeling in Office 365 apps</p>
                                <p>Automatic labeling in the AIP plugin</p>
                                <p>Automatic sensitivity labels in Exchange, SharePoint, and OneDrive</p>
                                <p>Sensitivity labels based on advanced classification (ML, EDM)</p>
                                <p>DLP for Teams chat</p>
                                <p>Advanced Office Message Encryption</p>
                                <p>Customer Key for Office 365</p>
                                <p>Advanced eDiscovery</p>
                                <p>Advanced Audit</p>
                                <p>Insider Risk Management</p>
                                <p>Communication Compliance</p>
                                <p>Information Barriers</p>
                                <p>Customer Lockbox</p>
                                <p>Privileged Access Management</p>
                                <p>Microsoft 365 E5 Security</p>
                                <p>Microsoft 365 E5 Compliance</p>
                                <p>Microsoft 365 E5 Info Protection and Governance</p>
                                <p>Microsoft 365 E5 Insider Risk Management</p>
                                <p>Microsoft 365 E5 eDiscovery and Audit</p>
                                <p>Microsoft Defender for Identity</p>
                                <p>Microsoft Defender for Office 365 Plan 1</p>
                                <p>Microsoft Defender for Office 365 Plan 2</p>
                                <p>Microsoft Defender for Cloud Apps</p>
                                <p>Microsoft Defender for Endpoint Plan 2</p>
                                <p>Azure Active Directory Premium Plan 2</p>
                                <p>Audio Conferencing</p>
                                <p>Teams Phone3</p>
                                <p>Power BI Pro</p>
                            </div>
                            <div className="col-md-6 sgg_abcd">
                                <h3>Includes: these Microsoft features</h3>
                                <p>Azure Active Directory Premium Plan 1</p>
                                <p>Azure Information Protection Plan 1</p>
                            </div>
                        </div>
                        : null}
                    {packagenamenew === 'Office 365 for Enterprise E5 Azure Active Directory Premium P1 (Add-on)' ?
                        <div className='row'>
                            <div className="col-md-6 sgg_abc">
                                <h3>Excludes these Microsoft features:</h3>
                                <p>Teams Phone</p>
                                <p>Audio Conferencing</p>
                                <p>Power BI Pro</p>
                                <p>Microsoft Defender for Endpoint Plan 2</p>
                                <p>Microsoft Defender for Identity</p>
                                <p>Microsoft Defender for Office 365 Plan 2</p>
                                <p>Application Guard for Office 365</p>
                                <p>Safe Documents</p>
                                <p>Microsoft Defender for Cloud Apps</p>
                                <p>Azure Active Directory Premium Plan 2</p>
                                <p>Risk Based Conditional Access / Identity Protection</p>
                                <p>Privileged Identity Management</p>
                                <p>Access Reviews</p>
                                <p>Entitlement Management</p>
                                <p>Rules-based automatic retention policies</p>
                                <p>Machine Learning-based retention</p>
                                <p>Records Management</p>
                                <p>Azure Information Protection Plan 2</p>
                                <p>Automatic sensitivity labeling in Office 365 apps</p>
                                <p>Automatic labeling in the AIP plugin</p>
                                <p>Automatic sensitivity labels in Exchange, SharePoint, and OneDrive</p>
                                <p>Sensitivity labels based on advanced classification (ML, EDM)</p>
                                <p>DLP for Teams chat</p>
                                <p>Advanced Office Message Encryption</p>
                                <p>Customer Key for Office 365</p>
                                <p>Advanced eDiscovery</p>
                                <p>Advanced Audit</p>
                                <p>Insider Risk Management</p>
                                <p>Communication Compliance</p>
                                <p>Information Barriers</p>
                                <p>Customer Lockbox</p>
                                <p>Privileged Access Management</p>
                                <p>Microsoft 365 E5 Security</p>
                                <p>Microsoft 365 E5 Compliance</p>
                                <p>Microsoft 365 E5 Info Protection and Governance</p>
                                <p>Microsoft 365 E5 Insider Risk Management</p>
                                <p>Microsoft 365 E5 eDiscovery and Audit</p>
                                <p>Microsoft Defender for Identity</p>
                                <p>Microsoft Defender for Office 365 Plan 1</p>
                                <p>Microsoft Defender for Office 365 Plan 2</p>
                                <p>Microsoft Defender for Cloud Apps</p>
                                <p>Microsoft Defender for Endpoint Plan 2</p>
                                <p>Azure Active Directory Premium Plan 2</p>
                                <p>Audio Conferencing</p>
                                <p>Teams Phone3</p>
                                <p>Power BI Pro</p>
                            </div>
                            <div className="col-md-6 sgg_abcd">
                                <h3>Includes: these Microsoft features</h3>
                                <p>Windows Store Access Management</p>
                                <p>Microsoft Intune</p>
                                <p>Microsoft Endpoint Manager</p>
                                <p>Mobile application management</p>
                                <p>Windows AutoPilot</p>
                                <p>Endpoint Analytics</p>
                                <p>Cortana management</p>
                                <p>Azure Information Protection Plan 1</p>
                                <p>Manual labeling with the AIP app and plugin</p>
                                <p>Azure Virtual Desktop</p>
                                <p>Universal Print</p>
                                <p>Microsoft Defender for Endpoint Plan 1</p>
                                <p>Azure Active Directory Premium Plan 1</p>
                                <p>Microsoft Intune</p>
                            </div>
                        </div>
                        : null}
                    {packagenamenew === 'Office 365 for Enterprise E1 Azure Active Directory Premium P1 (Add-on)' ?
                        <div className='row'>
                            <div className="col-md-6 sgg_abc">
                                <h3>Excludes these Microsoft features:</h3>
                                <p>Exchange Plan 1 (50 GB mailbox)</p>
                                <p>SharePoint Plan 1 (1 TB OneDrive storage)</p>
                            </div>
                            <div className="col-md-6 sgg_abcd">
                                <h3>Includes: these Microsoft features</h3>
                                <p>Desktop client apps</p>
                                <p>Microsoft Editor premium features</p>
                                <p>Multilingual user interface for Office apps</p>
                                <p>Exchange Plan 2 (100 GB mailbox)</p>
                                <p>Outlook desktop client</p>
                                <p>Auto-expanding email archive</p>
                                <p>Inactive mailboxes</p>
                                <p>Microsoft Bookings</p>
                                <p>SharePoint Plan 2 (unlimited OneDrive storage3)</p>
                                <p>Windows Store Access Management</p>
                                <p>Microsoft Intune</p>
                                <p>Microsoft Endpoint Manager</p>
                                <p>Mobile application management</p>
                                <p>Windows AutoPilot</p>
                                <p>Group Policy support</p>
                                <p>Shared computer activation for M365 Apps</p>
                                <p>Endpoint Analytics</p>
                                <p>Cortana management</p>
                                <p>Basic org-wide or location-wide retention policies</p>
                                <p>Azure Information Protection Plan 1</p>
                                <p>Manual, default, and mandatory sensitivity labeling in Office 365</p>
                                <p>Manual labeling with the AIP app and plugin</p>
                                <p>Sensitivity labeling for containers in Office 365</p>
                                <p>O365 Data Loss Prevention (DLP) for emails & files</p>
                                <p>Basic Office Message Encryption</p>
                                <p>Core eDiscovery (including Hold and Export)</p>
                                <p>Litigation Hold</p>
                                <p>Azure Virtual Desktop</p>
                                <p>Universal Print</p>
                                <p>Microsoft Defender for Endpoint Plan 1</p>
                                <p>Office 365 Data Loss Prevention</p>
                                <p>Exchange Archiving</p>
                                <p>Azure Active Directory Premium Plan 1</p>
                                <p>Microsoft Intune</p>
                            </div>
                        </div>
                        : null}
                    {packagenamenew === 'Microsoft 365 for Business Premium Azure Active Directory Premium P1 (Included)' ?
                        <div className='row'>

                            <div className="col-md-6 sgg_abc">
                                <h3>Excludes these Microsoft features:</h3>
                                <p>Exchange Plan 1 (50 GB mailbox)</p>
                                <p>SharePoint Plan 1 (1 TB OneDrive storage)</p>
                                <p>Application Guard for Office 365</p>
                                <p>Microsoft Defender for Office 365 Plan 1</p>
                            </div>
                            <div className="col-md-6 sgg_abcd">
                                <h3>Includes: these Microsoft features</h3>
                                <p>Exchange Plan 2 (100 GB mailbox)</p>
                                <p>Inactive mailboxes</p>
                                <p>SharePoint Plan 2 (unlimited OneDrive storage3)</p>
                                <p>Sensitivity labeling for containers in Office 365</p>
                                <p>Microsoft Defender for Endpoint Plan 1</p>
                            </div>
                        </div>
                        : null}
                    {packagenamenew === 'Microsoft 365 for Business Standard Azure Active Directory Premium P1 (Add-on)' ?
                        <div className='row'>
                            <div className="col-md-6 sgg_abc">
                                <h3>Excludes these Microsoft features:</h3>
                                <p>Exchange Plan 1 (50 GB mailbox)</p>
                                <p>SharePoint Plan 1 (1 TB OneDrive storage)</p>
                            </div>
                            <div className="col-md-6 sgg_abcd">
                                <h3>Includes: these Microsoft features</h3>
                                <p>Exchange Plan 2 (100 GB mailbox)</p>
                                <p>Auto-expanding email archive</p>
                                <p>Inactive mailboxes</p>
                                <p>SharePoint Plan 2 (unlimited OneDrive storage3)</p>
                                <p>Microsoft Defender Antimalware</p>
                                <p>Microsoft Defender Firewall</p>
                                <p>Microsoft Defender Exploit Guard</p>
                                <p>Microsoft Defender Credential Guard</p>
                                <p>BitLocker and BitLocker To Go</p>
                                <p>Windows Information Protection</p>
                                <p>Windows Store Access Management</p>
                                <p>Microsoft Intune</p>
                                <p>Mobile Device Management</p>
                                <p>Microsoft Endpoint Manager</p>
                                <p>Mobile application management</p>
                                <p>Windows AutoPilot</p>
                                <p>Group Policy support</p>
                                <p>Shared computer activation for M365 Apps</p>
                                <p>Endpoint Analytics</p>
                                <p>Cortana management</p>
                                <p>Manual retention labels</p>
                                <p>Basic org-wide or location-wide retention policies</p>
                                <p>Teams message retention policies</p>
                                <p>Azure Information Protection Plan 1</p>
                                <p>Manual, default, and mandatory sensitivity labeling in Office 365</p>
                                <p>Manual labeling with the AIP app and plugin</p>
                                <p>Sensitivity labeling for containers in Office 365</p>
                                <p>O365 Data Loss Prevention (DLP) for emails & files</p>
                                <p>Basic Office Message Encryption</p>
                                <p>Core eDiscovery (including Hold and Export)</p>
                                <p>Litigation Hold</p>
                                <p>Azure Virtual Desktop</p>
                                <p>Universal Print</p>
                                <p>Microsoft Defender for Endpoint Plan 1</p>
                                <p>Office 365 Data Loss Prevention</p>
                                <p>Exchange Archiving</p>
                                <p>Azure Active Directory Premium Plan 1</p>
                                <p>Microsoft Intune</p>
                            </div>
                        </div>
                        : null}
                </div>
            </div>
        </>
    );

};

export default SinglePackage;
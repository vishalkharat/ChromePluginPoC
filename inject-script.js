console.log('<----- Injected script started running ----->');

function parseEssentialDetails() {
    let main = {};

    main.performance = JSON.parse(JSON.stringify(window.performance)) || null;
    main.title = window.document.title
    customerData = {};
    customerData.Dealer          = window.document.getElementById('ContentPlaceHolder1_lblDealer').value;
    customerData.DealerCode     = window.document.getElementById('ContentPlaceHolder1_lblDealer_Code').value;
    customerData.DealerEmail     = window.document.getElementById('ContentPlaceHolder1_lblDealerEmail').value;
    customerData.DealerMobile    = window.document.getElementById('ContentPlaceHolder1_lblDealerMobile').value;

    customerData.DealerInvoice   = window.document.getElementById('ContentPlaceHolder1_txtDealerInvoice').value;
    customerData.DealerInvoiceDate   = window.document.getElementById('ContentPlaceHolder1_txtDealerInvoiceDate').value;
    customerData.VehiclePurchased = window.document.getElementById('ContentPlaceHolder1_txtVehiclepurchased').value;
    customerData.InvoiceAmount   = window.document.getElementById('ContentPlaceHolder1_txtInvoiceAmount').value;
    

    customerData.AmountAdjusted   = window.document.getElementById('ContentPlaceHolder1_txtAmountadjusted').value;
    customerData.TotalInvoiceAmount = window.document.getElementById('ContentPlaceHolder1_txtTotalInvoiceAmount').value;
    customerData.TotalAdmissibleIncentive = window.document.getElementById('ContentPlaceHolder1_txtTotalAdmissibleIncentive').value;
    customerData.TotalPayableCustomer = window.document.getElementById('ContentPlaceHolder1_txtTotalPayableCustomer').value;

    customerData.CustomerName = window.document.getElementById('ContentPlaceHolder1_txtCustomerName').value;
    customerData.Address = window.document.getElementById('ContentPlaceHolder1_txtAddress').value;
    customerData.ddlState = window.document.getElementById('ContentPlaceHolder1_ddlState').value;
    customerData.MobileNo = window.document.getElementById('ContentPlaceHolder1_txtMobileNo').value;

    customerData.CustomerProof = window.document.getElementById('ContentPlaceHolder1_ddlCustomerProof').value;
    customerData.CustomerIDNo = window.document.getElementById('ContentPlaceHolder1_txtCustomerIDNo').value;
    main.customerData = customerData;
    return main;
}

setInterval(() => {
    let essential = parseEssentialDetails();
    window.postMessage({ type: "FROM_PAGE", essential });
}, 1000);

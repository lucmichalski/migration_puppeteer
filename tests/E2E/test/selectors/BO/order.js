module.exports = {
  OrderPage: {
    orders_subtab: '#subtab-AdminParentOrders',
    form: '#form-order',
    view_order_button: '#form-order tr:nth-of-type(%NUMBER) div[class*=pull-right] a',
    order_state_select: '#id_order_state',
    update_status_button: '#status > form button[name=submitState]',
    order_quantity: '#orderProducts tr:nth-of-type(%NUMBER) > td:nth-of-type(4) > span[class*=show]',
    order_available_quantity: '#orderProducts tr:nth-of-type(%NUMBER) > td:nth-of-type(5)',
    order_status: '#status table[class*=history-status] tr:nth-of-type(1) > td:nth-of-type(2)',
    shipping_cost: '#shipping_table tr:nth-of-type(1) td:nth-of-type(5) > span',
    message_order: '#content div.message-body p.message-item-text',
    product_Url: '#orderProducts tr:nth-of-type(1) > td:nth-of-type(2) > a',
    edit_product_button: '#orderProducts button[class*=edit_product_change_link]',
    product_basic_price: '#orderProducts tr:nth-of-type(%NUMBER) input[class*=edit_product_price_tax_incl]',
    product_basic_price_TTC: '#orderProducts > tbody > tr:nth-child(%NUMBER) > td:nth-child(3) > span',
    customer_name: '#content div.message-body h4.message-item-heading',
    order_submenu: '//*[@id="subtab-AdminOrders"]/a',
    document_submenu: '#tabOrder a[href="#documents"]',
    download_delivery_button: '//*[@id="documents_table"]//tr[3]/td[3]/a',
    product_name: '#orderProducts tr:nth-of-type(%NUMBER) span.productName',
    total_price: '#total_products > td[class*=amount]',
    shipping_method: '#shipping_table tr > td:nth-of-type(3)',
    search_by_reference_input: '#form-order table[class*=order] input[name=orderFilter_reference]',
    search_order_button: '#submitFilterButtonorder',
    first_order: '//*[@id="form-order"]//table//tbody//tr[1]//a',
    transform_guest_customer_button: '//*[@id="content"]//input[@name="submitGuestToCustomer"]',
    check_order_id: '#table-cart  tr:nth-child(1)  td:nth-child(3) span',
    dropdown_button: '#table-cart  tr:nth-child(1)  td:nth-child(9) button[data-toggle*=dropdown]',
    delete_button: '#table-cart tr:nth-child(1) > td:nth-child(9) a[class*=delete]',
    stock_product: '#orderProducts tr:nth-of-type(%NUMBER) > td:nth-of-type(5)',
    total_order: '#total_order > td.amount.text-right.nowrap > strong',
    total_product_price: '#orderProducts tr:nth-of-type(%NUMBER) > td:nth-of-type(6)',
    first_shopping_cart_checkbox: '#table-cart tr:nth-of-type(1) input[name="cartBox[]"]',
    first_dropdown_button: '#table-cart > tbody tr:nth-of-type(1) button[data-toggle=dropdown]',
    total_price_tax_included: '#orderProducts tr:nth-of-type(%NUMBER) > td.total_product',
    order_view_button: '#table-order tr:nth-child(%ORDERNumber) td:nth-child(12) a',
    partial_refund: '#desc-order-partial_refund',
    product_total: '#documents tr[id*=orderslip] > td:nth-of-type(4)',
    re_stock_product: 'label[for=reinjectQuantitiesRefund]',
    generate_credit_slip_checkbox: '//label[@for="generateCreditSlip"]',
    refund_products_button: 'button[name="partialRefund"]',
    success_msg: '#content  div[class*=alert-success]:nth-child(1)',
    order_date: '#content  div.col-xs-6.col-sm-3.box-stats.color3 span.value',
    order_ref: '#content  div:nth-child(4) > div.col-lg-7  div.panel-heading > span:nth-child(2)',
    product_information: '#orderProducts tr:nth-of-type(1) > td:nth-of-type(2) > a',
    empty_page_logo: '//*[@id="documents_table"]//div[@class="list-empty-msg"]',
    pdf_icon: '//*[@id="table-order"]//tr[%ORDER]//td[11]//i',
    invoice_document: '//table//td[3]/a',
    product_quantity: '#orderProducts span[class*=product_quantity_show]',
    product_name_tab: '#orderProducts span[class*=productName]',
    product_unit_price: '#orderProducts input[name=product_price_tax_excl]',
    product_unit_price_tax_included: '#orderProducts span.product_price_show',
    product_price: '#orderProducts input[name=product_price_tax_incl]',
    total_order_price: '#total_order > td:nth-of-type(2) > strong',
    total_product: '#total_products > td:nth-of-type(2)',
    shipping_cost_price: '#total_shipping > td:nth-of-type(2)',
    total: '#total_order > td:nth-of-type(2) > strong',
    total_tax: '#total_taxes > td:nth-of-type(2)',
    carrier: '#shipping_table tr:nth-of-type(1) > td:nth-of-type(3)',
    payment_method: '#formAddPayment tr:nth-of-type(1) > td:nth-of-type(2)',
    payment_date_column: '#formAddPayment tr:nth-of-type(1) > td:nth-of-type(1)',
    order_id: '#content  div:nth-child(4) > div.col-lg-7  div.panel-heading > span:nth-child(3)',
    credit_slip_document_name: '#documents_table tr:nth-of-type(3) a',
    quantity_refund: '#orderProducts div.input-group > input[onchange="checkPartialRefundProductQuantity(this)"]',
    documents_tab: '#tabOrder > li:nth-of-type(2) > a',
    generate_invoice_button: '#documents_table > tbody > tr > td > a',
    awaiting_bank_wire_payment_option: '#form_generate_by_status_order_states > div:nth-child(1)  span:nth-child(4)',
    awaiting_check_payment: '#form_generate_by_status_order_states > div:nth-child(3) span:nth-child(4)',
    cancelled_option: '#form_generate_by_status_order_states > div:nth-child(4)  span:nth-child(4)',
    delivery_document_name: '#documents_table tr:nth-of-type(3) a',
    product_total_price: '#total_order > td:nth-of-type(2) > strong',
    delivery_slip_document: '#documents_table a[href*=DeliverySlip]',
    status:'#status > div > table td img[alt*="%STATUS"]',
    customer_email:'#content dl[class*=list-detail] a',
    customer_created:'#content dd.text-muted',
    valid_order_placed:'#content dl[class*=list-detail] dd span.badge',
    total_registration:'#content dd span[class*=badge-success]',
    shipping_address: '#addressShipping',
    tab_invoice:'#tabAddresses a[href^="#addressInvoice"]',
    amount_payment:'#formAddPayment tr:nth-of-type(1) > td:nth-of-type(4)',
    tracking_number_column:'#shipping_table tr:nth-of-type(1) > td:nth-of-type(6)',
    shipping_address_bloc: 'div #addressShipping',
    customer_email_link: '#content dl > dd:nth-of-type(1) > a',
    customer_account_registred_text: '#content dd.text-muted',
    valid_order_placed_number_span: '#content dd:nth-of-type(3) > span',
    total_registration_span: '#content dd:nth-of-type(4) > span',
    invoice_address_tab: '#tabAddresses > li:nth-of-type(2) > a',
    invoice_address: '#addressInvoice',
    date_shipping: '#shipping_table tr > td:nth-of-type(1)',
    weight_shipping: '#shipping_table tr > td:nth-of-type(4)',
    view_invoice_button: '//*[@id="content"]//div[contains(@class, "hidden-print")]/a[contains(@href, "generateInvoicePDF")]',
    date_invoice: '(//*[@id="documents_table"]//a[contains(@href, "generateInvoicePDF")])[1]',
    download_invoice_button: '(//*[@id="documents_table"]//a[contains(@href, "generateInvoicePDF")])[1]',
    view_delivery_slip: '//*[@id="content"]//div[contains(@class, "hidden-print")]/a[contains(@href, "generateDeliverySlipPDF")]',
    date_delivery_slip:'//*[@id="documents_table"]//tr[3]/td[1]',
    page_title:'#content h1.page-title',
    id_order:'//*[@id="table-order"]//tr[1]/td[2]',
    products_table:'div#start_products',
  },

  CreateOrder: {
    new_order_button: '#page-header-desc-order-new_order',
    customer_search_input: '#customer',
    choose_customer_button: '#customers > div:nth-of-type(1) > div > div:nth-of-type(2) > button',
    product_search_input: '#product',
    quantity_input: '#qty',
    add_to_cart_button: 'div.form-group #submitAddProduct',
    order_message_textarea: 'div.form-group #order_message',
    order_message_div: 'div.order_message_right',
    delivery_option: '#carrier_form #delivery_option',
    payment: '#payment_module_name',
    total_shipping: '#total_shipping',
    create_order_button: '#summary_part button[name=submitAddOrder]',
    product_combination: '.id_product_attribute',
    basic_price_value: '#customer_cart tr:nth-of-type(1) input.product_unit_price',
    product_select: '//*[@id="id_product"]',
    new_customer_button: '#search-customer-form-group a',
    detail_customer_button: '#customers a',
    customer_details_header_bloc: '#container-customer div.panel.clearfix div.panel-heading',
    customer_details_email_link: '#container-customer div.panel.clearfix div.panel-heading a:nth-child(2)',
    close_detail_link: 'a[title=Close]',
    detail_cart_button: '#nonOrderedCarts a[title*=View]',
    use_cart_button: '#nonOrderedCarts a[title*=Use]',
    orders_tab: '#old_carts_orders_navtab > li:nth-of-type(2) > a',
    detail_orders_button: '#lastOrders a[title*=View]',
    use_orders_button: '#lastOrders a[class*=duplicate_order]',
    total_with_tax: 'div #total_with_taxes',
    delete_product_button: '#customer_cart a[class*=delete_product]',
    quantity_arrow_up_button: '#customer_cart a[class*=increaseqty_product]',
    quantity_arrow_down_button: '#customer_cart a[class*=decreaseqty_product]',
    price_product_column: '#customer_cart td:nth-of-type(6)',
    currency_select: '#id_currency',
    language_select: '#id_lang',
    voucher_input: '#voucher',
    delete_voucher_button: '#voucher_list a[class*=delete_discount]',
    new_voucher_button: '#vouchers_part a',
    detail_addresses_bloc: '#address_delivery_detail',
    shipping_price: '#shipping_price > b',
    edit_delivery_address_button: '#edit_delivery_address',
    new_address_button: 'div #new_address',
    delivery_address_select: 'div #id_address_delivery',
    invoice_address_select: 'div #id_address_invoice',
    free_shipping_button: '#carrier_form > div:nth-of-type(3) > div label[for=free_shipping%S]',
    total_products_span: '#total_products',
    total_vouchers_span: '#total_vouchers',
    total_taxes_span: '#total_taxes',
    total_tax_excluded_span: '#total_without_taxes',
    total_tax_included_span: '#total_with_taxes',
  },

  ShoppingCart: {
    check_first_order_id: '//*[@id="table-cart"]//tr[1]/td[3]/span',
    check_order_customer: '//*[@id="table-cart"]//tr[1]/td[4]',
    view_order_button: '//*[@id="table-cart"]//td[%NUMBER]//a[@title="View"]',
    total_cart: '//*[@id="box-kpi-cart"]//span[@class="value"]',
    customer_name: '//*[@id="content"]//a[text()="%NAME"]',
    product_unit_price: '#orderProducts tr:nth-child(%NUMBER) > td:nth-child(3)',
    quantity_product: '#orderProducts tr:nth-child(%NUMBER) > td:nth-child(4)',
    stock_product: '#orderProducts tr:nth-child(%NUMBER) > td:nth-child(5)',
    total_product: '#orderProducts tr:nth-child(%NUMBER) > td:nth-child(6)',
    total_cart_summary: '#orderProducts td:nth-of-type(2) > strong',
    order_page: '//*[@id="content"]//a[contains(@href,"%s")]',
    export_carts_button: '#page-header-desc-cart-export_cart',
    search_input: '#table-cart thead input[name="cartFilter_%searchParam"]',
    search_button: '#submitFilterButtoncart',
    id: '#table-cart tr:nth-of-type(%NUMBER) > td:nth-of-type(%COL)',
    order_id: '#table-cart tr:nth-of-type(%NUMBER) > td:nth-of-type(%COL)',
    customer: '#table-cart tr:nth-of-type(%NUMBER) > td:nth-of-type(%COL)',
    total: '#table-cart tr:nth-of-type(%NUMBER) > td:nth-of-type(%COL)',
    carrier: '#table-cart tr:nth-of-type(%NUMBER) > td:nth-of-type(%COL)',
    date: '#table-cart tr:nth-of-type(%NUMBER) > td:nth-of-type(%COL)',
    customer_online: '#table-cart tr:nth-of-type(%NUMBER) td:nth-of-type(%COL)',
    id_shopping_carts: 'table-cart',
    reset_button: '[name=submitResetcart]',
    checkbox_input: '#table-cart input[name="cartBox[]"]',
    filter_id_input: '#table-cart input[name=cartFilter_id_cart]',
    product_name_cart: '//*[@id="orderProducts"]//tr[%NUMBER]/td[1]',
  },

  CreditSlip: {
    date_form: '//*[@id="date_from"]',
    date_to: '//*[@id="date_to"]',
    generate_button: '//*[@id="submitPrint"]',
    alert_message: '//*[@id="content"]//div[contains(@class,"alert-danger")]',
    credit_slip_prefix_input: '#conf_id_PS_CREDIT_SLIP_PREFIX div.translatable-field.lang-1 input',
    save_button: '#order_slip_fieldset_general button[type=submit]',
    green_validation: '#content div.alert.alert-success',
    first_credit_slip_download_btn: '#table-order_slip > tbody > tr:nth-of-type(1) > td:nth-of-type(4) > a',
    filter_by_order_id:'#table-order_slip input[name="order_slipFilter_a!id_order"]'
  },

  Invoices: {
    generate_pdf_button: '#main-div div:nth-child(2) > div:nth-child(1) > form  button',
    generate_pdf_by_status_button: '#by-status-block div.card-footer button',
    from_input: '#form_generate_by_date_date_from',
    to_input: '#form_generate_by_date_date_to',
    no_invoice_alert: '#main-div div.alert-text > p'
  },
  DeliverySlip: {
    generate_btn: '#delivery_pdf_fieldset button',
    delivery_prefix: '#form_options_prefix_1',
    delivery_number: '#form_options_number',
    enable_product_image: '#delivery_options_fieldset label[for=form_options_enable_product_image_1]',
    disable_product_image: '#delivery_options_fieldset label[for=form_options_enable_product_image_0]',
    save_button: '#delivery_options_fieldset div.card-footer button',
    success_message: '#main-div div.alert-text > p'
  }
};

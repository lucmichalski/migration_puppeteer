module.exports = {
  productPage: {
    first_product: '#content article:nth-child(1) h3',
    first_product_size: '#group_1',
    first_product_quantity: '#quantity_wanted',
    first_product_color: '#group_2 li:nth-child(2) input',
    product_name: '#main h1[itemprop=name]:nth-child(1)',
    product_price: '#main span[itemprop=price]:nth-child(1)',
    product_reference: '#main span[itemprop=sku]:nth-of-type(1)',
    product_manufacturer: '#product-details div.product-manufacturer a',
    product_quantity: '#product-details > div.product-quantities > span',
    pack_product_name: '#add-to-cart-or-refresh article:nth-child(%P) .pack-product-name a',
    pack_product_price: '#add-to-cart-or-refresh article:nth-child(%P) .pack-product-price',
    pack_product_quantity: '#add-to-cart-or-refresh article:nth-child(%P) .pack-product-quantity',
    product_size: '#group_1 ',
    product_color: '#group_3 span):nth-child(2) | (#group_2 span):nth-child(2)',
    see_all_products: '#content a [class*=all-product-link]',
    first_product_all: '#js-product-list article a):nth-child(1)',
    pagination_next: '#js-product-list a [class*=next]',
    pagination_previous: '#js-product-list a [class*=previous]',
    current_page: '#js-product-list ul.page-list li.current a',
    product_discount_details: '#main span.discount',
    quick_view_add_to_cart: '#add-to-cart-or-refresh button[data-button-action*=add-to-cart]',
    products_number: '#js-product-list-top p',
    offline_warning_message: 'div.alert-warning p',
    product_discounts_table: '#add-to-cart-or-refresh tbody tr:nth-child(%R) td:nth-child(%D)',
    second_product: '#content article:nth-child(2) h3',
    product_availability_message: '#product-availability',
    product_summary: '[itemprop="description p:nth-child(1)',
    product_description: '#description',
    product_detail_tab: '[role="tablist > li:nth-child(2)',
    attachments_tab: '#main div.product-information a [aria-controls="attachments"]',
    cloths_category: '#category-3 ',
    second_product_clothes_category: '#js-product-list article:nth-child(2)',
    product_footer_linkwidget: '#main div:nth-child(2) p[contains(text(),"%DISPLAYFOOTERPRODUCT")]',
    filename_link: '#attachments a:nth-child(%N)',
    product_tab_list: ' *[role="tablist li:nth-child(%I)',
    second_product_footer_linkwidget: '#main div:nth-child(2) div div:nth-child(2) p',
    widget_after_product_thumbs: '#content div.links p[contains(text(),"%NAME")]',
    second_widget_after_product_thumbs: '#content div.links div:nth-child(2) p',
    display_footer_product_linkwidget: '#main div:nth-child(2) div p[contains(text(),"%DISPLAYFOOTERPRODUCT")]',
    display_second_footer_product_linkwidget: '#main div:nth-child(2) div div:nth-child(2) p',
    product_page: '#product ',
    breadcrumb_nav: ' *.breadcrumb',
    product_section: '#main div:nth-child(1) div:nth-child(%I)',
    category_page: '#category ',
    left_column_block: '#left-column ',
    pagination_block: '#js-product-list nav',
    productLink: '#js-product-list h2[class*=title] > a [href*="%PRODUCTNAME"]',
    product_feature_block: '#product-details > section > dl',
    value_feature_text: '#product-details section dd br',
    product_value_text: '#product-details > section dd:%B-of-type',
    product_feature_text: '#product-details > section dt:%B-of-type',
    product_tax_label: '#main div.tax-shipping-delivery-label" and (contains(text(),"Tax excluded") or contains(text(),"Tax included") )] ',
    file_description: '#attachments section div p',
    pagination_number_link: '#js-product-list nav li:nth-child(%NUM) a',
    product_pictures: '#content ul.product-images li:nth-child(%ID) img[title="%LEGEND"]',
    unit_price_text: '#main p.product-unit-price',
    product_on_sale_flag: ' li.on-sale',
    quick_view_product_price: ' div.current-price span[itemprop="price"]',
    quick_view_product_discount: ' div.current-price span.discount',
    page_meta_title: 'head > title',
    page_meta_description: ' meta [name="description"]',
    page_link: ' html head link:nth-child(1)',
    alert_bloc: '#notifications article',
    product_online_only_flag: '#content li.online-only',
    product_name_link: '#js-product-list a [contains(text(),"%S")]',
    product_condition: '#product-details div.product-condition span',
    product_customization_message: '#main li:nth-of-type(%I) textarea.product-message',
    save_customization_button: '#main button[name="submitCustomizedData"]',
    product_customization_file: '( *.file-input):nth-child(%I)',
    attachment_title: '#attachments div.attachment a',
    attachment_description: '#attachments div.attachment p',
    delete_shopping_cart_item: '#main a .remove-from-cart '
  }
};

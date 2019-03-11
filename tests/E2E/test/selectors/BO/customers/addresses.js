module.exports = {
  Addresses: {
    addresses_menu: '//*[@id="subtab-AdminAddresses"]/a',
    new_address_button: '#page-header-desc-address-new_address',
    email_input: '#email',
    address_form: '#fieldset_0',
    id_number_input: '#dni',
    address_alias_input: '#alias',
    first_name_input: '#firstname',
    last_name_input: '#lastname',
    company: '#company',
    VAT_number_input: '#vat_number',
    address_input: '#address1',
    address_second_input: '#address2',
    zip_code_input: '#postcode',
    city_input: '#city',
    country_input: '#id_country',
    phone_input: '#phone',
    other_input: '#other',
    save_button: '#address_form_submit_btn',
    filter_by_address_input: '#form-address input[name=addressFilter_address1]',
    address_value: '#form-address td:nth-of-type(%ID)',
    edit_button: '//*[@id="table-address"]//a[@title="Edit"]',
    dropdown_toggle: '//*[@id="table-address"]//button[@data-toggle="dropdown"]',
    delete_button: '//*[@id="table-address"]//a[@title="Delete"]',
    select_address: '//*[@id="table-address"]//input[@name="addressBox[]"]',
    bulk_actions_button: '//*[@id="bulk_action_menu_address"]',
    bulk_actions_delete_button: '//div[contains(@class,"bulk-actions")]//a[contains(@onclick,"submitBulkdeleteaddress")]',
    required_fields_button: '//a[contains(@onclick,"requiredFieldsParameters")]',
    company_field_input: '//input[contains(@name,"fieldsBox[]")]',
    submit_field: '//button[contains(@name,"submitFields")]',
    select_all_field_name: '//input[contains(@name,"checkme")]',
    address_id: '//*[@id="table-address"]//td[2]',
    empty_class: '//*[@id="table-address"]//div[contains(@class,"list-empty-msg")]',
    first_name_value: '#table-address tr:nth-of-type(%ID) > td:nth-of-type(3)',
    last_name_value: '#table-address tr:nth-of-type(%ID) > td:nth-of-type(4)',
    zip_code_value: '#table-address tr:nth-of-type(%ID) > td:nth-of-type(6)',
    city_value: '#table-address tr:nth-of-type(%ID) > td:nth-of-type(7)',
    country_value: '#table-address tr:nth-of-type(%ID) > td:nth-of-type(8)'
  }
};
'use strict';
let path = require('path');
let should = require('should');
let argv = require('minimist')(process.argv.slice(2));
let pdfUtil = require('pdf-to-text');

global.date_time = new Date().getTime();

let siteUrl = argv.URL || 'http://localhost';
if (!/^https?:\/\//i.test(siteUrl)) {
  siteUrl = 'http://' + siteUrl;
}
global.URL = siteUrl;
global.dateTime = new Date().getTime();
global.install_language = argv.LANGUAGE || 'en';
global.install_country = argv.COUNTRY || 'france';
global.install_directory = argv.INSTALLDIRECTORY || 'install-dev';
global.country_currency = argv.CURRENCY || 'EUR';
global.db_server = argv.DB_SERVER || 'localhost';
global.db_user = argv.DB_USER || 'root';
global.db_passwd = argv.DB_PASSWD || 'root';
global.db_empty_password = !!argv.DB_EMPTY_PASSWD; //Cast as boolean

global.module_tech_name = argv.MODULE || 'ps_legalcompliance';
global.test_addons = !argv.TEST_ADDONS; //Cast as boolean
global.install_shop = !!argv.INSTALL;
global.downloadsFolderPath = './test/downloads/';  // Download directory
global.UrlLastStableVersion = argv.URLLASTSTABLEVERSION; // URL of last stable version of prestashop

global.rcLink = argv.RCLINK || ''; // Link for download The RC
global.rcTarget = argv.RCTARGET; // Last stable version location directory
global.filename = argv.FILENAME || ''; // RC file name

global.headless = argv.HEADLESS || true;

global.adminEmail = argv.ADMIN_EMAIL || 'demo@prestashop.com';
global.adminPassword = argv.ADMIN_PASSWORD || 'prestashop_demo';

global._projectdir = path.join(__dirname, '..', '..');
global.debugFile = argv.DEBUG_FILE || _projectdir + '/../config/defines.inc.php';
global.new_customer_email = 'pub' + date_time + '@prestashop.com';
global.categoryImage = path.join(__dirname, '', 'datas', 'category_image.png');
global.categoryThumb = path.join(__dirname, '', 'datas', 'category_miniature.png');
global.brandsImage = path.join(__dirname, '', 'datas', 'prestashop.png');

global.onboarding = false;
global.invoiceFileName = '';
global.basic_price = '';
global.indexText = 0;
global.categoryID = '';

global.ps_mode_dev = true;
global.alertAccept = false;
module.exports = {
  selector: require('./selectors'),
  shouldExist: function (err, existing) {
    should(err).be.not.defined;
    should(existing).be.true;
  }
};

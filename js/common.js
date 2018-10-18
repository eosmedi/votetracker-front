var countryCode = { 4: "Afghanistan", 8: "Albania", 10: "Antarctica", 12: "Algeria", 16: "American Samoa", 20: "Andorra", 24: "Angola", 28: "Antigua and Barbuda", 31: "Azerbaijan", 32: "Argentina", 36: "Australia", 40: "Austria", 44: "Bahamas", 48: "Bahrain", 50: "Bangladesh", 51: "Armenia", 52: "Barbados", 56: "Belgium", 60: "Bermuda", 64: "Bhutan", 68: "Bolivia", 70: "Bosnia and Herzegovina", 72: "Botswana", 74: "Bouvet Island", 76: "Brazil", 84: "Belize", 86: "British Indian Ocean Territory", 90: "Solomon Islands", 92: "Virgin Islands", 96: "Brunei Darussalam", 100: "Bulgaria", 104: "Myanmar", 108: "Burundi", 112: "Belarus", 116: "Cambodia", 120: "Cameroon", 124: "Canada", 132: "Cabo Verde", 136: "Cayman Islands", 140: "Central African Republic", 144: "Sri Lanka", 148: "Chad", 152: "Chile", 156: "China", 158: "Taiwan, Province of China", 162: "Christmas Island", 166: "Cocos (Keeling) Islands", 170: "Colombia", 174: "Comoros", 175: "Mayotte", 178: "Congo", 180: "Congo", 184: "Cook Islands", 188: "Costa Rica", 191: "Croatia", 192: "Cuba", 196: "Cyprus", 203: "Czechia", 204: "Benin", 208: "Denmark", 212: "Dominica", 214: "Dominican Republic", 218: "Ecuador", 222: "El Salvador", 226: "Equatorial Guinea", 231: "Ethiopia", 232: "Eritrea", 233: "Estonia", 234: "Faroe Islands", 238: "Falkland Islands", 239: "South Georgia and the South Sandwich Islands", 242: "Fiji", 246: "Finland", 248: "Åland Islands", 250: "France", 254: "French Guiana", 258: "French Polynesia", 260: "French Southern Territories", 262: "Djibouti", 266: "Gabon", 268: "Georgia", 270: "Gambia", 275: "Palestine, State of", 276: "Germany", 288: "Ghana", 292: "Gibraltar", 296: "Kiribati", 300: "Greece", 304: "Greenland", 308: "Grenada", 312: "Guadeloupe", 316: "Guam", 320: "Guatemala", 324: "Guinea", 328: "Guyana", 332: "Haiti", 334: "Heard Island and McDonald Islands", 336: "Holy See", 340: "Honduras", 344: "Hong Kong", 348: "Hungary", 352: "Iceland", 356: "India", 360: "Indonesia", 364: "Iran", 368: "Iraq", 372: "Ireland", 376: "Israel", 380: "Italy", 384: "Côte d'Ivoire", 388: "Jamaica", 392: "Japan", 398: "Kazakhstan", 400: "Jordan", 404: "Kenya", 408: "Korea (Democratic People's Republic of)", 410: "Korea (Republic of)", 414: "Kuwait", 417: "Kyrgyzstan", 418: "Lao People's Democratic Republic", 422: "Lebanon", 426: "Lesotho", 428: "Latvia", 430: "Liberia", 434: "Libya", 438: "Liechtenstein", 440: "Lithuania", 442: "Luxembourg", 446: "Macao", 450: "Madagascar", 454: "Malawi", 458: "Malaysia", 462: "Maldives", 466: "Mali", 470: "Malta", 474: "Martinique", 478: "Mauritania", 480: "Mauritius", 484: "Mexico", 492: "Monaco", 496: "Mongolia", 498: "Moldova", 499: "Montenegro", 500: "Montserrat", 504: "Morocco", 508: "Mozambique", 512: "Oman", 516: "Namibia", 520: "Nauru", 524: "Nepal", 528: "Netherlands", 531: "Curaçao", 533: "Aruba", 534: "Sint Maarten", 535: "Bonaire, Sint Eustatius and Saba", 540: "New Caledonia", 548: "Vanuatu", 554: "New Zealand", 558: "Nicaragua", 562: "Niger", 566: "Nigeria", 570: "Niue", 574: "Norfolk Island", 578: "Norway", 580: "Northern Mariana Islands", 581: "United States Minor Outlying Islands", 583: "Micronesia", 584: "Marshall Islands", 585: "Palau", 586: "Pakistan", 591: "Panama", 598: "Papua New Guinea", 600: "Paraguay", 604: "Peru", 608: "Philippines", 612: "Pitcairn", 616: "Poland", 620: "Portugal", 624: "Guinea-Bissau", 626: "Timor-Leste", 630: "Puerto Rico", 634: "Qatar", 638: "Réunion", 642: "Romania", 643: "Russian Federation", 646: "Rwanda", 652: "Saint Barthélemy", 654: "Saint Helena, Ascension and Tristan da Cunha", 659: "Saint Kitts and Nevis", 660: "Anguilla", 662: "Saint Lucia", 663: "Saint Martin", 666: "Saint Pierre and Miquelon", 670: "Saint Vincent and the Grenadines", 674: "San Marino", 678: "Sao Tome and Principe", 682: "Saudi Arabia", 686: "Senegal", 688: "Serbia", 690: "Seychelles", 694: "Sierra Leone", 702: "Singapore", 703: "Slovakia", 704: "Viet Nam", 705: "Slovenia", 706: "Somalia", 710: "South Africa", 716: "Zimbabwe", 724: "Spain", 728: "South Sudan", 729: "Sudan", 732: "Western Sahara", 740: "Suriname", 744: "Svalbard and Jan Mayen", 748: "Swaziland", 752: "Sweden", 756: "Switzerland", 760: "Syrian Arab Republic", 762: "Tajikistan", 764: "Thailand", 768: "Togo", 772: "Tokelau", 776: "Tonga", 780: "Trinidad and Tobago", 784: "United Arab Emirates", 788: "Tunisia", 792: "Turkey", 795: "Turkmenistan", 796: "Turks and Caicos Islands", 798: "Tuvalu", 800: "Uganda", 804: "Ukraine", 807: "Macedonia", 818: "Egypt", 826: "United Kingdom", 831: "Guernsey", 832: "Jersey", 833: "Isle of Man", 834: "Tanzania", 840: "United States of America", 850: "Virgin Islands", 854: "Burkina Faso", 858: "Uruguay", 860: "Uzbekistan", 862: "Venezuela", 876: "Wallis and Futuna", 882: "Samoa", 887: "Yemen", 894: "Zambia" };
var chainState = {};

var countryCodeISO = {"AF":"Afghanistan","AX":"Åland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BQ":"Bonaire, Sint Eustatius and Saba","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","CV":"Cabo Verde","KH":"Cambodia","CM":"Cameroon","CA":"Canada","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo","CK":"Cook Islands","CR":"Costa Rica","CI":"Côte d'Ivoire","HR":"Croatia","CU":"Cuba","CW":"Curaçao","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island and McDonald Islands","VA":"Holy See","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Islamic Republic of Iran","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"Democratic People's Republic of Korea","KR":"Korea","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People's Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MK":"Macedonia","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Federated States of Micronesia","MD":"Republic of Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"State of Palestine","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Réunion","RO":"Romania","RU":"Russian","RW":"Rwanda","BL":"Saint Barthélemy","SH":"Saint Helena, Ascension and Tristan da Cunha","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","MF":"Saint Martin","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan, Province of China","TJ":"Tajikistan","TZ":"United Republic of Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands","VI":"Virgin Islands","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"};


/* EC */
function getImgUrl(pet) {
    var map   = {
        'usa' : 'us',
        'hk': 'cn',
        'rok': 'kr'
    }
    if(map[pet]){
        pet = map[pet];
    }
    return 'images/flags/' + pet + ".png";
}


var OUR_PRODUCER = 'eosmedinodes';


Vue.filter('fromNow', function (x) { 
    return moment.utc(x).utcOffset(moment().utcOffset()).fromNow();;
})

Vue.component("page", {
    template: "#page",
    props: ["current", "allpage"],
    data: function () {
        console.log("page", this.current);
        return {
            showItem: 5,
            allpage: 13
        }
    },
    computed: {
        pages: function () {
            var pag = [];
            if (this.current < this.showItem) {
                var i = Math.min(this.showItem, this.allpage);
                while (i) {
                    pag.unshift(i--);
                }
            } else {
                var middle = this.current - Math.floor(this.showItem / 2),
                    i = this.showItem;
                if (middle > (this.allpage - this.showItem)) {
                    middle = (this.allpage - this.showItem) + 1
                }
                while (i--) {
                    pag.push(middle++);
                }
            }
            return pag
        }
    },
    methods: {
        goto: function (index) {
            if (index == this.current) return;
            this.current = index;
            this.$emit("pageChange", this.current);
            if(window.scrollTo){
                window.scrollTo( 0, 0 );
            }
        }
    }
})

Vue.filter('numberWithCommas', function (x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
})


Vue.filter('date', function (x) {
    return moment.utc(x).utcOffset(moment().utcOffset()).format("llll");;
})

var producerTags = {
    bitfinexeos1: ["Exchange"],
    eoshuobipool: ["Exchange"],
    zbeosbp11111: ["Exchange"],
    okcapitalbp1: ["Exchange"],
    eosantpoolbp: ["Mining pools"]
};

Vue.component("treemap", {
    template: "#treemap",
    props: ["data", "name"],
    data: function () {
        console.log("page", this.current);
        return {
            myChart: null
        }
    },

    mounted: function(){
        console.log(this.$refs.chart);
        this.myChart = this.$echarts.init(this.$refs.chart);
        this.renderChart();
    },

    watch:{
        data: function (newVal, oldVal) {
            this.renderChart();
        },
    },
    methods: {
        renderChart: function (index) {
            var myChart = this.myChart;
            var formatUtil = echarts.format;
            function getLevelOption() {
                return [
                    {
                        itemStyle: {
                            normal: {
                                borderColor: '#777',
                                borderWidth: 0,
                                gapWidth: 1
                            }
                        },
                        upperLabel: {
                            normal: {
                                show: false
                            }
                        }
                    },
                    {
                        itemStyle: {
                            normal: {
                                borderColor: '#555',
                                borderWidth: 5,
                                gapWidth: 1
                            },
                            emphasis: {
                                borderColor: '#ddd'
                            }
                        }
                    },
                    {
                        colorSaturation: [0.35, 0.5],
                        itemStyle: {
                            normal: {
                                borderWidth: 5,
                                gapWidth: 1,
                                borderColorSaturation: 0.6
                            }
                        }
                    }
                ];
            }


            console.log("data", this.data);

            myChart.setOption(option = {
                title: {
                    text: this.name,
                    left: 'center'
                },

                tooltip: {
                    formatter: function (info) {
                        var value = info.value;
                        var treePathInfo = info.treePathInfo;
                        var treePath = [];

                        for (var i = 1; i < treePathInfo.length; i++) {
                            treePath.push(treePathInfo[i].name);
                        }

                        return [
                            '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                            'Staked: ' + formatUtil.addCommas(value) + ' EOS',
                        ].join('');
                    }
                },

                series: [
                    {
                        name:'Voters',
                        type:'treemap',
                        visibleMin: 300,
                        label: {
                            show: true,
                            formatter: '{b}'
                        },
                        upperLabel: {
                            normal: {
                                show: true,
                                height: 30
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#fff'
                            }
                        },
                        levels: getLevelOption(),
                        data: this.data
                    }
                ]
            });
        }
    }
})


Vue.component("pie", {
    template: "#pie",
    props: ["data", "name", "subname"],
    data: function () {
        console.log("page", this.current);
        return {
            myChart: null
        }
    },

    mounted: function(){
        console.log(this.$refs.chart);
        this.myChart = this.$echarts.init(this.$refs.chart);
        this.renderChart();
    },

    watch:{
        data: function (newVal, oldVal) {
            this.renderChart();
        },
    },
    methods: {
        renderChart: function (index) {
            var myChart = this.myChart;
            var formatUtil = echarts.format;
            console.log("data", this.data);


            var self = this;

            myChart.on('click', function (param) {
                console.log('click', param);

                self.$router.push({
                    name: 'VoterDetail',
                    params: {
                        voter: param.data.name
                    }
                })
            });

            myChart.setOption({
                title : {
                    text: this.name,
                    subtext: this.subname,
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} EOS ({d}%)",
                    position: function(point, params, dom, rect, size){
                        // console.log(point, params, dom, rect, size);
                        return [params[0]-220,'10%'];
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'Votes',
                        itemStyle : {
                            normal : {
                                label : {
                                    show : false   //隐藏标示文字
                                },
                                labelLine : {
                                    show : false   //隐藏标示线
                                }
                            }
                        },
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data: this.data
                    }
                ]
            });
        }
    }
})

var axiosInstance = axios.create();
Vue.prototype.API = axiosInstance;
axiosInstance.defaults.params = {};
axiosInstance.defaults.baseURL = "https://api.tallymeter.io/"



var eosVenusAxiosInstance = axios.create();
Vue.prototype.VENUS = eosVenusAxiosInstance;
eosVenusAxiosInstance.defaults.params = {};
eosVenusAxiosInstance.defaults.baseURL = "https://api.eosvenus.com"

Vue.prototype.$echarts = echarts;

function isMobileResolution(){
    var width = window.innerWidth;
    if(width && width < 800){
        return true;
    }
    return false;
}

var isMobile = isMobileResolution();

window.onresize = function(evt){
    isMobile = isMobileResolution();
    console.log("isMobile", isMobile);
}

Vue.prototype.isMobile = isMobile;


var ProducersList = {
    template: "#producerList",
    props: ['chainState', 'filterProducers'],
    data: function () {
        var self = this;
        console.log('filterProducers', this.filterProducers);
        return {
            filterProducers: [],
            currentPage: 1,
            totalPage: 10,
            pageSize: 70,
            countryCode: countryCode,
            countryCodeISO: countryCodeISO,
            loading: true,
            producers: [],
            tableData: [],
            request: true,
            toSmall: false,
            multipleSelection: [],
            t: 0,
            status: null
        }
    },
    watch: {
        currentPage: function (newVal, oldVal) {
            console.log('ENtRO EN WAtCH');
            this.loading = true;
            this.getProducers();
        }
    },
    mounted: function () {
        console.log('ENtRO EN MOUNTED');
        setInterval(function () {
            self.getProducers(true);
        }, 80 * 1000);

        var self = this;

        this.toSmall = window.innerWidth < 1200;

        if(this.$refs.page){
            this.$refs.page.$on("pageChange", function (data) {
                self.currentPage = data;
                console.log("pageChange", data);
            })
        }

        if(this.filterProducers && this.filterProducers.length){
            self.pageSize = 400;
        }

        this.getProducers();

    },
    methods: {
        isStatus: function(){
            this.status = this.$parent.status;
            if(this.status != null){
                return true;
            }
        },
        visuliazeProducers: function(){
            if(!this.multipleSelection.length){
                alert("please select one producer");
                return;
            }
            this.$router.push( { name: 'VoterStruct', params: { producers: this.multipleSelection.join(',') }})
        },
        handleSelectionChange: function (val) {
            console.log('handleSelectionChange', val);
            var selectedProducers = [];
            for(var key in val){
                selectedProducers.push(val[key].owner)
            }
            this.multipleSelection = selectedProducers;
        },
        clickProducer: function(row, index){
            Vue.set(row, "selected", !row.selected);
            var val = [];
            for(var key in this.tableData){
                if(this.tableData[key].selected) val.push(this.tableData[key]);
            }
            this.handleSelectionChange(val);
            console.log('clickProducer', row, val);
        },
        voteUs: function(){
            this.$parent.voteProducer(OUR_PRODUCER);
        },
        voteProducer: function(producer){
            console.log('producer', producer);
            this.$parent.voteProducer(producer.owner);
        },
        getProducers: function (isTimer) {
            console.log('ENTRO EN PRODUCERS');
            var self = this;
            if(isTimer && self.request){
                return;
            }
            this.request = true;
            var myComponent = this;
            this.API.get("getProducers"+ "?p=" + this.currentPage + "&size=" + this.pageSize).then(function (res) {
                if(res.data.rows){
                    self.producers = res.data.rows;
                    self.totalPage = Math.ceil(res.data.total / self.pageSize);
                }else{
                    self.producers = res.data;
                }

                self.loading = false;
                self.request = false;

                var tableData = [];
                var indexCount = 0;

                for(var key in self.producers){
                    indexCount++;
                    var producer = self.producers[key];
                    var show = true;
                    if(self.filterProducers && self.filterProducers.indexOf(producer.owner) == -1){
                        show = false;
                    }

                    producer.show = show;
                    producer.voters =  producer.voters ?  producer.voters : 0;

                    producer.tags = [];

                    if(producerTags[producer.owner]){
                        producer.tags = [].concat(producerTags[producer.owner]);
                    }

                    if(producer.org_location &&  producer.org_location.country){
                        producer.tags.push(producer.org_location.country);
                    }
                    // console.log('producerTags[key]', producerTags[producer.owner]);
                    if(show){
                        tableData.push(producer);
                    }

                }

                self.tableData = tableData;

                Vue.nextTick(function () {
                    /* EC */
                    if (typeof reloadTables === 'function'){
                        // reloadTables();
                    }
                })
                // filterProducers && filterProducers.indexOf(voter.account_name) > -1
                var r = 0;
                for (var i in self.producers)
                    200 * (o = self.producers[i].total_votes / self.chainState.total_producer_vote_weight * 100) < 100 && (
                        r += parseFloat(self.producers[i].total_votes)
                    );
                self.t = r;



            })
        },
        cacluteReawrd: function(i, producer, chainState, r){
            var o, u = 0;
            parseInt(i) + 1 < 22 && (u += 318),
                u += producer.total_votes / (chainState.total_producer_vote_weight - r) * 100 * 200;
            var flag = 200 * (o = producer.total_votes / chainState.total_producer_vote_weight * 100) < 100;
            if(u < 100){
                u = 0;
            }
            return u.toFixed(0);
        },
        calculateVoteWeight: function() {
            var timestamp_epoch = 946684800000;
            var dates_ = (Date.now() / 1000) - (timestamp_epoch / 1000);
            var weight_ = Math.ceil(dates_ / (86400 * 7)) / 52;
            return Math.pow(2, weight_);
        },
        numberWithCommas: function(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }
    }
}

var ProxyList = {
    template:"#ProxyList",
    data: function () {
        return {
            currentPage: 1,
            totalPage: 10,
            pageSize: 70,
            loading: true,
            type: 'reg',
            voters: [],
            status: null
        }
    },
    mounted: function () {
        var self = this;
        this.$refs.page.$on("pageChange", function (data) {
            self.currentPage = data;
            console.log("pageChange", data);
        })
        this.getProxyVoters();
    },
    watch: {
        currentPage: function (newVal, oldVal) {
            this.loading = true;
            this.getProxyVoters();
        },
        type: function(){
            this.loading = true;
            this.getProxyVoters();
        }
    },
    methods: {

        voteUs: function(){
            this.$parent.voteProducer(OUR_PRODUCER);
        },
        isStatus: function(){
            this.status = this.$parent.status;
            if(this.status != null){
                return true;
            }
        },
        getProxyVoters: function () {
            var self = this;
            var params = this.$route.params;
            console.log(this.$router);
            this.API.get("getVoteProxy?p=" + this.currentPage + "&size=" + this.pageSize+"&type="+this.type).then(function (res) {
                self.voters = res.data.rows;
                self.loading = false;
                self.totalPage = Math.ceil(res.data.total / self.pageSize);
                console.log(res.data, self.totalPage, res.data.total / self.pageSize);
                Vue.nextTick(function () {
                    /* EC */
                    if (typeof reloadTables === 'function'){
                        reloadTables();
                    }
                })
            })
        },
        numberWithCommas: function(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }
    }
};


function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

var ProducerDetail = {
    template: "#producerDetail",
    props: ["chainState"],
    data: function () {
        return {
            currentPage: 1,
            totalPage: 10,
            pageSize: 20,
            loading: true,
            producer: {
            },
            removeChart: {},
            chainState: {},
            logFilters: null,
            voteLogs: null,
        }
    },
    mounted: function () {
        var self = this;
        this.$refs.page.$on("pageChange", function (data) {
            self.currentPage = data;
            //console.log("pageChange", data);
        })

        this.getProducers();
    },
    watch: {
        currentPage: function (newVal, oldVal) {
            this.loading = true;
            this.getProducers();
        },
        $route: function (to, from) {
            this.loading = true;
            this.getProducers();
        }
    },
    methods: {

        openChartTab: function(){
            console.log('openChartTab');
        },

        /* EC */
        isLogFilter: function(){
          this.logFilters = this.$parent.logFilters;
          this.voteLogs = this.$parent.voteLogs;
          if(this.logFilters.producer && this.voteLogs != null){
                return true;
          }
        },
        filterLog: function(voteLog){
            voteLog.timeFormatted = moment.utc(voteLog.timestamp).utcOffset(moment().utcOffset()).format("llll");
            if(this.logFilters.producer){
                return voteLog.producers.indexOf(this.logFilters.producer) > -1
            }
            if(this.logFilters.voter){
                return voteLog.voter == this.logFilters.voter
            }

            return true;
        },
        /* END EC */

        vote: function(){
            var params = this.$route.params;
            var app = this.$parent.$parent ? this.$parent.$parent : this.$parent;
            app.voteProducer(params.producer);
        },

        getProducers: function () {
            var self = this;
            var params = this.$route.params;
            console.log(this.$router);
            this.API.get("getProducer/" + params.producer + "?p=" + this.currentPage + "&size=" + this.pageSize).then(function (res) {
                self.producer = res.data;
                self.totalPage = Math.ceil(res.data.producer.voters / self.pageSize);
                self.loading = false;
                try{
                    self.calcutePieData();
                }catch(e){}

                Vue.nextTick(function () {
                    /* EC */
                    if (typeof reloadTables === 'function'){
                        reloadTables();
                    }
                })
                //console.log(res.data);
            })
        },
        calcutePieData: function(){

            var removeChart = {
                name: "Remove voters",
                total: 0,
                data: []
            };

            var addChart = {
                name: "New voters",
                total: 0,
                data: []
            };

            var removeMap = {};
            var addMap = {};

            this.producer.removeLogs.forEach(function(row, index){
                var value =  row.info.voter_info.staked / 10000;


                if(index == 0){
                    removeChart.first =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                }

                removeChart.last =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                if(!removeMap[row.voter]){
                    removeChart.total += value;
                    removeChart.data.push({ name: row.voter, value: value })
                }
                removeMap[row.voter] = 1;
            })


            this.producer.addLogs.forEach(function(row, index){
                var value =  row.info.voter_info.staked / 10000;
                if(index == 0){
                    addChart.first =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                }

                addChart.last =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                if(!addMap[row.voter]){
                    addChart.data.push({ name: row.voter, value: value });
                    addChart.total += value;
                }
                addMap[row.voter] = 1;
            })

            removeChart.subname = "Total: "+numberWithCommas(removeChart.total.toFixed(0))+" EOS   Date Range: "+removeChart.first.format('YYYY-MM-DD') +" / "+removeChart.last.format('YYYY-MM-DD');
            addChart.subname = "Total: "+numberWithCommas(addChart.total.toFixed(0))+" EOS   Date Range: "+addChart.first.format('YYYY-MM-DD') +" / "+addChart.last.format('YYYY-MM-DD');

            this.removeChart = removeChart;
            this.addChart = addChart;
        },
        calculateVoteWeight: function() {
            var timestamp_epoch = 946684800000;
            var dates_ = (Date.now() / 1000) - (timestamp_epoch / 1000);
            var weight_ = Math.ceil(dates_ / (86400 * 7)) / 52;
            return Math.pow(2, weight_);
        },
        numberWithCommas: function(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }
    }
}


var VoterList = {
    template:"#VoterList",
    data: function () {
        return {
            currentPage: 1,
            totalPage: 10,
            pageSize: 20,
            loading: true,
            voters: [],
            status:null
        }
    },
    mounted: function () {
        var self = this;
        this.$refs.page.$on("pageChange", function (data) {
            self.currentPage = data;
            console.log("pageChange", data);
        })
        this.getProducers();

    },
    watch: {
        currentPage: function (newVal, oldVal) {
            this.loading = true;
            this.getProducers();
        }
    },
    methods: {
        isStatus: function(){
            this.status = this.$parent.status;
            if(this.status != null){
                return true;
            }
        },
        voteUs: function(){
            this.$parent.voteProducer(OUR_PRODUCER);
        },
        getProducers: function () {
            var self = this;
            var params = this.$route.params;
            console.log(this.$router);
            this.API.get("getVoters?p=" + this.currentPage + "&size=" + this.pageSize).then(function (res) {
                self.voters = res.data.rows;
                self.loading = false;
                self.totalPage = Math.ceil(res.data.total / self.pageSize);
                console.log(res.data);
                Vue.nextTick(function () {
                    /* EC */
                    if (typeof reloadTables === 'function'){
                        reloadTables();
                    }
                })
            })
        },
        numberWithCommas: function(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }
    }
}

var VoterDetail = {
    template: "#VoterDetail",
    props: ['chainState', 'eosClient', 'identity'],
    components: {
        'producers-list'  : ProducersList
    },
    data: function () {
        this.getVoter();
        return {
            chainState: chainState,
            loading: true,
            voter: {},
            chatText: '',
            eosClient: null,
            charts: [],
            chatsList: [],
            status:null,
            leftHeight: 400,
            addChart: null,
            removeChart: null,
            querying: {

            }
        }
    },

    watch: {
        voter: function (newVal, oldVal) {
        },
        $route: function (to, from) {

            this.addChart = null;
            this.removeChart = null;
            this.getVoter();
        }
    },

    mounted: function () {
        
        // this.eosClient = Eos({
        //     chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
        //     httpEndpoint: 'https://api.eosmedi.com',
        // });

        /* EC */
        if (typeof reloadTables === 'function'){
            reloadTables();
        }

        

    },

    methods: {

        openChartTab: function(){
            console.log('openChartTab');
        },
        isStatus: function(){
            this.status = this.$parent.status;
            if(this.status != null){
                return true;
            }
        },
        viewBlock: function(block, voteAction, index){
            if(!this.eosClient){
                return;
            }

            var self = this;
            if(self.querying[block]){
                return;
            }

            self.querying[block] = true;
            this.eosClient.getBlock(block).then(function(block){
                self.querying[block] = false;
                voteAction.timestamp = block.timestamp;
                self.$set(self.voter.actions, index, voteAction);
                console.log(block, voteAction);
            })
            console.log('viewBlock', block);
        },

        getVoter: function () {
            var self = this;
            var params = this.$route.params;
            console.log(this.$router);
            this.API.get("getVoter/" + params.voter).then(function (res) {
                self.voter = res.data;
                self.voter.actions = self.voter.actions || [];
                self.voter.actions = self.voter.actions.reverse();
                self.voter.stakeLogs = self.voter.stakeLogs.reverse();

                self.loading = false;

                if(self.voter.voter_info.is_proxy){
                    try{
                        self.calcutePieData();
                    }catch(e){
    
                    }
                }


                if(self.voter.all_proxy_voters){
                    self.voter.all_proxy_voters.sort(function(i1,i2){
                        var value2 = parseInt(i1.staked);
                        var value1 =  parseInt(i2.staked);
                        if (value1 < value2) {
                            return -1;
                        } else if (value1 > value2) {
                            return 1;
                        } else {
                            return 0;
                        }
                    });
                }

                if(self.voter.voter_info.is_proxy){
                    self.loadChat();
                }

                setTimeout(function(){
                    console.log(res.data, 'self.leftHeight', self.$refs, self.$refs.leftblock, self.$refs.leftblock.offsetHeight
                );
                    self.leftHeight = self.$refs.leftblock.offsetHeight;

                }, 900);

                
             

            })
        },

        proxyMyVotes: function (){

            var params = this.$route.params;
            
            if(!this.eosClient){
                alert('Please attach an account');
                return;
            }

            var firstAccount = this.identity.accounts[0];
            if(firstAccount){
            }

            this.eosClient.transaction({
                actions: [
                    {
                        account: 'eosio',
                        name: 'voteproducer',
                        authorization: [{
                            actor: firstAccount.name,
                            permission: firstAccount.authority
                        }],
                        data: {
                            "voter": firstAccount.name,
                            "proxy": params.voter,
                            "producers":[]
                        }
                    }
                ]
            }).then(function(data){
                console.log(data.transaction_id);
                alert('sucess');
            }, function(error){
                console.log("error", error)
            }).catch(function(error){
                console.log("submmit error", error);
            })

        },

        sendChat(){
            console.log('sendChat');

            if(!this.eosClient){
                alert('Please attach an account');
                return;
            }

            if(!this.chatText) {
                alert('message is empty');
                return;
            }

            console.log('a');
            var firstAccount = this.identity.accounts[0];
            if(firstAccount){

            }

            var params = this.$route.params;
            var self = this;


            var defData = {
                "from": firstAccount.name,
                "to": params.voter,
                "content": this.chatText,
            };

            this.eosClient.transaction({
                actions: [
                    {
                        account: 'eosmediddddd',
                        name: 'chat',
                        authorization: [{
                            actor: firstAccount.name,
                            permission: firstAccount.authority
                        }],
                        data: defData
                    }
                ]
            }).then(function(data){
                console.log(data.transaction_id);
                self.chatText = '';
                var action = data.processed.action_traces[0].act;
                action.chat_data = action.data;
                self.chatsList = [action].concat( self.chatsList);
                console.log(self.chatsList);
            }, function(error){
                console.log("error", error)
            }).catch(function(error){
                console.log("submmit error", error);
            })


        },

        loadChat(){
            console.log('loadChat');
            var params = this.$route.params;
            var self = this;

            this.VENUS.get('/aggregate?from=0&content_type=transcation&lastDay=60&size=10&source=eos&filters='+JSON.stringify([{"field":"dapp","type":"EQ","value":["eosmediddddd"]},{"field":"action","type":"EQ","value":["chat"]},{"field":"eosmediddddd_chat_to","type":"EQ","value":[ params.voter]}])).then(function (res) {

                console.log(res.data)

                res.data.forEach((data) => {

                    self.chatsList.push(data);

                })
                
            })


        },

        numberWithCommas: function(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        },

        calcutePieData: function(){

            var removeChart = {
                name: "Remove voters",
                total: 0,
                data: []
            };

            var addChart = {
                name: "New voters",
                total: 0,
                data: []
            };

            var removeMap = {};
            var addMap = {};

            this.voter.removeLogs.forEach(function(row, index){
                var value =  row.info.voter_info.staked / 10000;


                if(index == 0){
                    removeChart.first =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                }

                removeChart.last =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                if(!removeMap[row.voter]){
                    removeChart.total += value;
                    removeChart.data.push({ name: row.voter, value: value })
                }
                removeMap[row.voter] = 1;
            })


            this.voter.addLogs.forEach(function(row, index){
                var value =  row.info.voter_info.staked / 10000;
                if(index == 0){
                    addChart.first =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                }

                addChart.last =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                if(!addMap[row.voter]){
                    addChart.data.push({ name: row.voter, value: value });
                    addChart.total += value;
                }
                addMap[row.voter] = 1;
            })

            removeChart.subname = "Total: "+numberWithCommas(removeChart.total.toFixed(0))+" EOS   Date Range: "+removeChart.first.format('YYYY-MM-DD') +" / "+removeChart.last.format('YYYY-MM-DD');
            addChart.subname = "Total: "+numberWithCommas(addChart.total.toFixed(0))+" EOS   Date Range: "+addChart.first.format('YYYY-MM-DD') +" / "+addChart.last.format('YYYY-MM-DD');

            this.removeChart = removeChart;
            this.addChart = addChart;
        }
    }
}




var VoterStruct = {
    template: '#VoterStruct',
    components: {
        'producers-list'  : ProducersList
    },
    data: function () {
        console.log("VoterStruct");
        this.getProducerData();
        return {
            chainState: chainState,
            data: [],
            loading: true,
            charts: []
        }
    },
    mounted: function () {

        // this.chartData = diskData;

    },
    watch: {
        voter: function (newVal, oldVal) {
        },
        $route: function (to, from) {
            this.getVoter();
        }
    },

    methods: {
        getProducerData: function () {
            var self = this;
            var params = this.$route.params;
            console.log(this.$router);
            this.API.get("voterCompare?producers="+params.producers).then(function (res) {
                self.data = res.data;
                self.loading = false;
                self.data.forEach(function(data){
                    var chartData =  data.voters.map(function(v){
                        return {
                            name: v.account_name,
                            value: v.staked/10000
                        }
                    });

                    self.charts.push({
                        chartName: data.producer.owner,
                        chartData: chartData
                    });

                })
                console.log(self.charts);
            })
        }
    }
}


var SubmitProxyInfo = {
    template: '#SubmitProxyInfo',
    props: ['eosClient', 'identity'],
    data: function () {
        console.log("SubmitProxyInfo");
        return {
            centerDialogVisible: false,
            dialogTitle: "",
            dialogMessage: "",
            form: {
            }
        }
    },
    mounted: function () {

        // this.chartData = diskData;


    },
    watch: {
        voter: function (newVal, oldVal) {
        },
        eosClient: function (to, from) {

            console.log("ready")
        },
        $route: function (to, from) {
            this.getVoter();
        }
    },

    methods: {
        onSubmit() {
            var self = this;

            if(!this.eosClient){
                alert('Please attach an account');
                return;
            }

            this.dialogTitle = "Info";

            this.centerDialogVisible = true;
            var identity = this.identity;
            console.log(identity);
            var firstAccount = identity.accounts[0];
            if(firstAccount){

            }

            this.dialogMessage = "Scatter will pop up a window let u accept Signature request...";

            var defData = {
                "proxy": firstAccount.name,
                "name": "",
                "slogan": "",
                "philosophy": "",
                "background": "",
                "website": "",
                "logo_256": "",
                "telegram": "",
                "steemit": "",
                "twitter": "",
                "wechat": ""
            };

            for(var k in this.form){
                defData[k] = this.form[k];
            }

            this.eosClient.transaction({
                actions: [
                    {
                        account: 'regproxyinfo',
                        name: 'set',
                        authorization: [{
                            actor: firstAccount.name,
                            permission: firstAccount.authority
                        }],
                        data: defData
                    }
                ]
            }).then(function(data){
                console.log(data.transaction_id);
                self.dialogMessage = "proxy info submit sucessed.<br>  TX:"+data.transaction_id;
            }, function(error){
                self.dialogMessage = "proxy info submit failed.<br> <span style='color:red'> "+error.message+"</span>";
                console.log("error", error)
            }).catch(function(error){
                error = JSON.parse(error);
                self.dialogMessage = "proxy info submit failed. <br> <span style='color:red'>"+error.error.details[0].message.split(":")[1]+"</span>";
                console.log("submmit error", error);
            })
        }
    }
}



var History = {
    template:"#History",
    data: function () {
        return {
            form: {},
            search_type: 'vote*',
            keyword: '',
            start_time: '',
            end_time: '',
            currentPage: 1,
            totalPage: 0,
            pageSize: 20,
            loading: false,
            results: [],
            total: 0
        }
    },
    mounted: function () {

        var self = this;

        if(this.$refs.page){
            this.$refs.page.$on("pageChange", function (data) {
                self.currentPage = data;
                console.log("pageChange", data);
            })
        }

    },
    watch: {
        currentPage: function (newVal, oldVal) {
            console.log('ENtRO EN WAtCH');
            this.search();
        }
    },
    methods: {
        search: function(){

            this.loading = true;
            console.log(this.keyword, this.start_time, this.end_time);

            if(!this.keyword) return;

            this.keyword = this.keyword.trim();

            var self = this;
            var query = "keyword="+this.keyword;

            if(this.start_time){
                query += "&start_time="+(new Date(this.start_time).getTime() / 1000);
            }

            if(this.end_time){
                query += "&end_time="+(new Date(this.end_time).getTime() / 1000);
            }

            if(this.search_type){
                query += "&search_type="+this.search_type;
            }

            query += "&size="+this.pageSize;
            query += "&from="+((this.currentPage -1 ) * this.pageSize);


            this.API.get("search?"+query).then(function (res) {
                var results = [];
                self.loading = false;
                res.data.hits.hits.forEach(function(hit){
                    results.push(hit._source);
                })


                
                self.total = res.data.hits.total;
                self.totalPage = Math.floor(self.total / self.pageSize);
                self.results = results;
            })

        }

    }
};

var Referendum = {
    template:"#Referendum",
    data: function () {
        return {
            currentPage: 1,
            totalPage: 10,
            pageSize: 70,
            loading: true,
            voters: []
        }
    },
    mounted: function () {

    },
    watch: {

    },
    methods: {

    }
};


var routes = [
    {
        name: "ProducersList",
        path: '/', component: ProducersList },
    {
        name: "ProducerDetail",
        path: '/producer/:producer', component: ProducerDetail
    },
    {
        name: "VoterList",
        path: '/voters', component: VoterList
    },
    {
        name: "ProxyList",
        path: '/proxies', component: ProxyList
    },
    {
        name: "VoterDetail",
        path: '/voter/:voter', component: VoterDetail,
        meta: { requireEosClient: true }
    },
    {
        name: "VoterStruct",
        path: '/voterStruct/:producers', component: VoterStruct
    },
    {
        name: "SubmitProxyInfo",
        path: '/submit-proxy-info', component: SubmitProxyInfo,
        meta: { requireEosClient: true }
    },
    {
        name: "History",
        path: '/history', component: History
    },
    {
        name: "Referendum",
        path: '/referendum', component: Referendum
    }
]

var router = new VueRouter({
    routes: routes
})


router.afterEach(function(from, to){
    console.log(from, to)
    if(window.scrollTo){
        window.scrollTo( 0, 0 );
    }
})


var network = {
    blockchain: 'eos',
    host: 'mars.fn.eosbixin.com', // ( or null if endorsed chainId )
    port: 443, // ( or null if defaulting to 80 )
    chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906", // Or null to fetch automatically ( takes longer )
}

var app = new Vue({
    router: router,
    data: function () {
        var self = this;
        self.getStatus();
        setInterval(function () {
            self.getStatus(true);
        }, 30 * 1000);

        self.getVoteLogs();
        setInterval(function () {
            self.getVoteLogs(true);
        }, 30 * 1000);

        return {
            loaded: false,
            status: {
                producers: 376,
                voters: 17515,
                proxy_voters: 81,
                percent_stacked: 30.383
            },
            countryCode: countryCode,
            countryCodeISO: countryCodeISO,
            requestStatus: true,
            requestLogs: true,
            chainState: {},
            logFilters: {},
            voteLogs: [],
            scatter: null,
            identity: null,
            eosClient: null,
            votedProducers: [],
            aleardyVoted: false,
            accountLoading: false,
            popupShow: false,
            OUR_PRODUCER: OUR_PRODUCER,
			newProducers: ['eosmedinodes'],
        }
    },
    mounted: function () {
        this.initliazeRoute();
        this.loaded = true;
        var self = this;
        if ('-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style) { // detect it's IE11
            window.addEventListener("hashchange", function(event) {
                var currentPath = window.location.hash.slice(1);
                if (self.$route.path !== currentPath) {
                    self.$router.push(currentPath)
                }
            }, false)
        }
        ScatterJS.plugins( new ScatterEOS() );

        document.addEventListener('scatterLoaded', function(){
            console.log('scatterLoaded', ScatterJS.scatter.identity)
            self.scatter = ScatterJS.scatter;
            self.identity = ScatterJS.scatter.identity;
        })

        ScatterJS.scatter.connect('VoteTracker').then(function(connected){
            if(connected){
                self.scatter = ScatterJS.scatter;
                self.identity = ScatterJS.scatter.identity;
                console.log('connected',  self.identity)
            }
        });

        console.log(this.$route)
    },

    watch: {
        $route: function (to, from) {

            console.log("$route", this.$route);
            this.initliazeRoute();
        },
        identity: function(){
            var self = this;
            try{
                if(self.identity){
                    self.identity.accounts.forEach(function(x){
                        if(x.blockchain == "eos"){
                            self.identity.name = x.name+"@"+x.authority;
                        }
                    })
                    self.eosClient = ScatterJS.scatter.eos(network, Eos, {
                        broadcast: true,
                        sign: true,
                        chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
                    },'https');
                }
            }catch(e){
                console.log(e);
            }

        }
    },

    methods: {

        removeProducer(producer, index){
			this.votedProducers.splice(index, 1)
        },
        
        popupVote(){

                var identity = this.identity;
                console.log(identity);
                var firstAccount = identity.accounts[0];
                if(firstAccount){

                }
                var defData = {
                    producers: this.newProducers.concat(this.votedProducers).sort(),
                    proxy: '',
                    voter: firstAccount.name
                }

                this.eosClient.transaction({
                        actions: [
                                {
                                        account: 'eosio',
                                        name: 'voteproducer',
                                        authorization: [{
                                                actor: firstAccount.name,
                                                permission: firstAccount.authority
                                        }],
                                        data: defData
                                }
                        ]
                }).then(function(data){
                        console.log(data.transaction_id);
                        alert('vote success');
                }, function(error){
                        alert('vote failed')
                }).catch(function(error){
                        error = JSON.parse(error);
                        self.dialogMessage = "proxy info submit failed. <br> <span style='color:red'>"+error.error.details[0].message.split(":")[1]+"</span>";
                        console.log("submmit error", error);
                })

            console.log('popupSave')
        },

        voteProducer(producer){

            producer = producer || OUR_PRODUCER;

            console.log('voteProducer');

			if(!this.identity){
				alert('please attach an account');
				return;
			}

			this.newProducers = [producer];

			this.popupShow = true;
			var firstAccount =  this.identity.accounts[0];

            var queryAccount = 'bitfinexvp33';
            
			queryAccount = firstAccount.name;

			this.accountLoading = true;
			this.eosClient.getAccount({
				account_name: queryAccount
			}).then((result) => {
				if(result.voter_info){
					this.votedProducers = result.voter_info.producers;
				}
                this.accountLoading = false;
                this.aleardyVoted = false;
				this.votedProducers.forEach((producer) => {
					if(producer == this.newProducers[0]){
						this.aleardyVoted = true;
					}
				})
				console.log(result)
			})

			console.log('voteProducer', this.eosClient);
			
        },

        connectScatter: function(){
            var self = this;
            console.log("connectScatter");
                self.scatter.getIdentity({
                    accounts:[
                        {
                            chainId: network.chainId,
                            blockchain: network.blockchain
                        }
                    ]
                }).then(function(){
                    console.log('Attach Identity');
                    console.log(self.scatter.identity);
                    self.identity = ScatterJS.scatter.identity;
                    // this.setState({identity: ScatterJS.scatter.identity});
                }).catch(function(error){
                    console.error(error);
                });
        },

        signOut: function(){
            var self = this;
            console.log("signOut");
            this.scatter.forgetIdentity().then(function() {
                console.log('Detach Identity');
                self.identity = ScatterJS.scatter.identity;
            }).catch(function(error){
                console.error(error);
            });
        },

        initliazeRoute: function(){
            var route = this.$route;
            this.logFilters = {};
            if(route.name == "ProducerDetail"){
                this.logFilters.producer = route.params.producer;
            }

            if(route.name == "VoterDetail"){
                this.logFilters.voter = route.params.voter;
            }
            console.log(this.logFilters, route);
        },

        filterLog: function(voteLog){
            voteLog.timeFormatted = moment.utc(voteLog.timestamp).utcOffset(moment().utcOffset()).format("llll");
            if(this.logFilters.producer){
                return voteLog.producers.indexOf(this.logFilters.producer) > -1
            }
            if(this.logFilters.voter){
                return voteLog.voter == this.logFilters.voter
            }


            return true;
        },

        getStatus: function (isTimer) {
            var self = this;
            var params = this.$route.params;

            if(isTimer && self.requestStatus){
                return;
            }

            this.requestStatus = true;
            this.API.get("getStatus").then(function (res) {
                self.status = res.data;
                self.requestStatus = false;
                self.chainState = self.status.chain_state;
                self.chainState.total_producer_vote_weight = parseInt(self.chainState.total_producer_vote_weight);
            })
        },

        getVoteLogs: function (isTimer) {
            var self = this;
            if(isTimer && self.requestLogs){
                return;
            }

            this.requestLogs = true;
            this.API.get("getVoteLogs").then(function (res) {
                self.requestLogs = false;
                self.voteLogs = res.data.reverse();
            })
        },
    }
}).$mount('#app')
public class A {
    public static void main(String[] args) {

        //不再使用print()方法，之后的修改直接改js代码，不需要批处理  +$$$数量 -#####  -//
        String[] arr = new String[]{
                "#####基础信息", "",
                "曾用刊名", "former_name",
                "页码", "page_num",
                "增刊期数", "supplement",
                "单价（元）", "unit_price",
                "年定价（元）", "annual_price",
                "通信地址", "address",
                "邮政编码", "postcode",
                "联系电话", "phone_num",
                "传真", "fax",
                "省级新闻出版局：单选框【是/否】", "is_prov",
                "国家图书馆：单选框【是/否】", "is_na_lib",
                "中国版本图书馆：单选框【是/否】", "is_chinese_lib",
                "国家新闻出版署：单选框【是/否】", "is_na",
                //"主管单位联系人", "",
                "姓名", "charge_name",
                "职务", "charge_position",
                "电话", "charge_telephone",
                //"主办单位联系人", "",
                "姓名", "organizer_name",
                "职务", "organizer_position",
                "电话", "organizer_telephone",
                //"年度核验报送经办人", "",
                "姓名", "operator_name",
                "职务", "operator_position",
                "固定电话", "operator_phone",
                "移动电话", "operator_telephone",
                "电子邮箱", "operator_email",
                "出版单位性质：单选框【企业法人（填“企业法人”一栏）/事业法人（填“事业法人”一栏）/非法人（填“非法人”一栏）/其他（请注明）】$$$", "publish_unit_nature",
                //"企业法人出版单位信息", "",
                "营业执照编号", "business_license_num",
                "出资人", "contributor",
                "法人登记时间", "register_time1",
                "企业类型：单选框【全面所有制/集体所有制/有限责任公司/其他（请注明）】$$$", "enterprise_type",
                //"事业法人出版单位信息", "",
                "事业法人证书编号", "enterprise_certificate",
                "法人登记时间", "register_time2",
                "资金来源：单选框【全额拨款/差额拨款/自收自支/其他（请注明）】$$$", "funds_source",
                //"非法人出版单位信息", "",
                "启动资金(万元)", "start_capital",
                "资金来源：单选框【主办单位拨付/自筹/拨付与自筹相结合/其他专项资助】", "funds_source2",
                "财务核箅方式：单选框【独立核箅/非独立核算】", "account_method",
                "是否在异地设立派出机构：单选框【是/否】", "local_office",
                "派出机构数量", "office_num",
                "派出机构名称", "office_name",
                "派出机构人员总数", "office_people_num",
                "领取新闻记者证人员数量", "num_get_card",
                "采编培训合格人员数量", "num_qualified",
                "#####基本出版条件", "",
                "办公场所产权归属：复选框，自有$$$/上级单位提供$$$/租赁$$$/其他$$$,", "ownership",
                "在职人均办公面积(平方米)", "per_area",
                "印刷手段：单选框【委托印刷/自有印刷/自有+委托印刷】", "print_method",
                "发行方式：单选框【自办发行/邮发/邮发+自办发行/其他（请注明）】$$$", "dist_method",
                "广告经营方式：单选框【自主经营/委托代理经营/自主经营+委托代理/其他（请注明）】$$$", "advert_mode",
                "#####体制机制建设", "",
                "主管主办单位对所属期刊是否有经常性的指导和管理：单选框【是/否】", "is_guidance",
                "出版单位是否执行“三审三校”制度：单选框【是/否】", "is_system_used",
                "终审人是否领导班子成员：单选框【是/否】", "is_auditor_leader",
                "终审人姓名", "auditor_name",
                "终审人职务", "auditor_position",
                "出版单位是否规范执行期刊重大选题备案制度：单选框【是/否】", "is_standard",
                "学术期刊是否执行防范学术不端、维护学术伦理制度(非学术期刊不填)：单选框【是/否】", "is_prevent",
                "出版单位是否执行期刊新媒体内容审核把关制度?(无新媒体不填)：单选框【是/否】", "is_media_control",
                "出版单位是否坚持采编经营分开：单选框【是/否】", "is_separation",
                "出版单位是否落实基层党建各项要求：单选框【是/否】", "is_construction",
                "基层党组织名称(无独立基层党组织可不填)：单选框【是/否】", "party_org",
                "基层党组织负责人", "org_head",
                "其他体现坚持把社会效益放在首位的制度名称", "is_social_first",
                "#####环境资源条件", "",
                "总人数", "total_people",
                "在编人数", "company_employ_num",
                "聘用人数", "employ_num",
                "采编工作人员", "num_b1",
                "新媒体工作人员", "num_b2",
                "行政服务人员", "num_b3",
                "广告工作人员", "num_b4",
                "发行工作人员", "num_b5",
                "其他人员", "num_b6",
                "混岗情况说明", "job_mix",
                "博士学历人数", "num_c1",
                "硕士学历人数", "num_c2",
                "本科学历人数", "num_c3",
                "大专及以下学历人数", "num_c4",
                "正高职称人数", "num_d1",
                "副高职称人数", "num_d2",
                "中级职称人数", "num_d3",
                "初级及无职称人数", "num_d4",
                "中共党员人数", "num_e1",
                "共青团员人数", "num_e2",
                "民主党派人数", "num_e3",
                "群众人数", "num_e4",
                "总资产(万元)", "total_assets",
                "固定资产(万元)", "fixed_assets",
                "年末净资产(万元)", "year_net_assets",
                //"拥有的子公司数量", "",
                "全资个数", "whole_sub_num",
                "控股个数", "hold_sub_num",
                "参股个数", "part_su_num",
                "主管单位经费支持：单选框【有（万元/年）/无】$$$", "unit_support",
                "主办单位经费支持：单选框【有（万元/年）/无】$$$", "sponsor_support",
                //"本年度专项经费资助情况", "",
                "国家级专项经费(万元)", "na_support",
                "行业专业级专项经费(万元)", "industry_support",
                "省(区、市)级专项经费(万元)", "prov_support",
                "其他专项经费(万元)", "other_support",
                "本年度本刊组织开展的主要评比、表彰、人物评选等情况", "annual_activity",
                //"本年度单位及人员所获荣誉情况", "",
                "名称", "honor_na",
                "数量", "honor_na_num",
                "名称", "honor_prov",
                "数量", "honor_prov_num",
                "名称", "honor_industry",
                "数量", "honor_industry_num",
                "本年度单位及人员受处罚情况事由及处理结果", "punishment",
                //"领导班子情况登记表", "",
                "领导班子情况：可包括多行【姓名、性别、年龄、职务、政治面貌、文化程度、技术职称、岗位培训合格证书、固定电话、移动电话、身份、是否主管主办单位任命】[name/gender/age/position/political/edu_level/tech_title/certificate/fixed_phone/telephone/identity/appoint]", "leaders",
                //"采编工作人员情况登记表", "",
                "采编工作人员情况：可包括多行【姓名、性别、年龄、职务、政治面貌、文化程度、职称、岗位性质、新闻记者证编号、出版专业职业资格证书编号】[name/gender/age/position/political/edu_level/title/job_nature/card_num/pro_num]", "workers",
                "#####出版能力", "",
                "年度出版期数(期)", "annual_publish_num",
                "年度总印张数(千印张)", "annual_print_num",
                "年度总印数(万册)", "annual_copies_num",
                "平均期印数(万册)", "avg_print_num",
                "平均期发行量(万册)", "avg_publish_num",
                "定价总金额", "total_pricing",
                "所办网站域名", "website",
                "年度点击量", "hits",
                "官方客户端种数", "client_num",
                "客户端名称", "client_name",
                "总下载量", "client_download",
                "活跃用户数", "active_num",
                "官方微信公众号种数", "wechat_num",
                "公众号名称", "wechat_name",
                "总订户数", "wechat_user",
                "篇均阅读量", "wechat_ave",
                "年度10万+文章数", "wechat_10w",
                "是否开展电子商务：单选框【是/否】", "is_ecom",
                "官方微博账号种数", "weibo_num",
                "微博账户名", "weibo_name",
                "微博总粉丝数", "weibo_fans",
                "进驻第三方新闻、视频等平台数量", "third_num",
                "相关平台名称", "third_name",
                "版权输出收入(万元)", "copyright_income",
                "版权引进支出(万元)", "copyright_expend",
                "海外出版收入(万元)", "overseas_revenue",
                "海外发行量(万册)", "overseas_circulation",
                "海外版本数", "overseas_ver_num",
                "海外版本名称", "overseas_ver",
                "海外机构数量", "overseas_org_num",
                "海外机构名称", "overseas_org",
                "#####学术情况出版有关情况（非学术期刊无需填写）", "",
                "年度收文量", "annual_receipts",
                "年度发文量", "annual_volume",
                "开放获取情况：单选框【否/部分论文/全部论文】", "open_access",
                "评价机构收录情况(20xx年)：复选框", "collect_inst",
                "国际数据库收录情况", "inter_data",
                "国际传播平台自建和合作使用情况", "inter_coop",
                "#####经营能力", "",
                "发行收入(万元)", "income_iss",
                "广告收入(万元)", "income_ad",
                "新媒体收入(万元)", "income_media",
                "版权收入(万元)", "income_cr",
                "项目活动收入(万元)", "income_pro",
                "其他收入(万元)", "income_other",
                "总收入(万元)", "income_total",
                "纸张印刷费用总额(万元)", "cost_paper",
                "人员工资总额(万元)", "cost_salary",
                "稿酬总额(万元)", "cost_rem",
                "员工培训经费总额(万元)", "cost_train",
                "新媒体投入总额(万元)", "cost_media",
                "社会公益捐赠总额(万元)", "cost_welfare",
                "年刊发公益广告量(页/版)", "welfare_adv",
                "其他支出(万元)", "cost_other",
                "总支出(万元)", "cost_total",
                "利润总额(万元)", "profit",
                "纳税总额(万元)", "tax",
                "是否存在多个版本：单选框【是/否】。选中“是”后，显示【分版情况】", "is_multi_ver",
                //"分版情况", "",
                "分版情况：可包括多行【版本名称、邮发代号（如无可不填写）】[version_name/mail_code]", "multi_ver",
                "是否与其他单位合作：单选框【是/否】。选中“是”后，显示【合作情况】", "is_coop",
                //"合作情况", "",
                "合作情况：可包括多行【合作单位名称、合作领域、合作方式、收益分配比例】[unit_name/field/mode/proportion]", "coop"};


        new A().print(arr);
    }

/*name重复的处理参考以下代码：*/
//click:function(d){
// var oid = $("container").attr("oid");
// var Author = new Array();
// $(".authors_tr").each(function(){
//     var map = {};
//     map['name'] = $(this).find(".name").val();
//     map['subject'] = $(this).find(".subject").val();
//     map['department'] = $(this).find(".department").val();
//     map['division'] = $(this).find(".division").val();
//     map['number'] = $(this).find(".number").val();
//     map['introduction'] = $(this).find(".introduction").val();
//     map['oid'] =oid;
//     Author.push(map);
// });


    //打印post data
    public void printPro(String[] arr) {
        for (int i = 0; i < arr.length; i = i + 2) {
            if (arr[i + 1].equals("")) {
                continue;
            }
            if (arr[i].contains("可包括多行")) {
                System.out.println(arr[i + 1] + ":" + arr[i + 1] + "Array,");
            } else {
                System.out.println(arr[i + 1] + ":p.new_data." + arr[i + 1] + ",");
                if (arr[i].contains("单选框") && arr[i].contains("$$$")) {
                    System.out.println(arr[i + 1] + "_detail" + ":p.new_data." + arr[i + 1] + "_detail" + ",");
                }
            }

        }
    }

    //打印基础的元素等
    public void print(String[] arr) {
        for (int i = 0; i < arr.length; i = i + 2) {
            if (arr[i].startsWith("#####") && arr[i].contains("基础信息")) {
                System.out.println("{e: \"fieldset\",\n" + "\tt:[{e: \"legend\", t: \"" + arr[i].substring(5) + "\"},");
            } else if (arr[i].startsWith("#####")) {
                System.out.println("]},\n{e: \"fieldset\",\n" + "\tt:[{e: \"legend\", t: \"" + arr[i].substring(5) + "\"},");
            }
            //处理单选框
            else if (arr[i].contains("单选框")) {
                //制作出selector
                String selector = arr[i].substring(arr[i].indexOf("【") + 1, arr[i].indexOf("】"));
                String[] selectorArr = selector.split("/");
                String a = "";
                for (String s : selectorArr) {
                    a += "\"" + s + "\",";
                }
                a = a.substring(0, a.length() - 1);
                //请注明
                if (arr[i].contains("$$$")) {
                    String item = "";
                    String display = "";
                    if (arr[i].contains("其他（请注明）")) {
                        item = "其他（请注明）";
                        display = ", style: {\"display\": \"none\"}";
                    } else if (arr[i].contains("有（请注明）")) {
                        item = "有（请注明）";
                    }
                    System.out.println("{\n" +
                            "\t\t\t\t\t\t\te: \"f1\", style:{width:\"550px\"}, t: [{e: \"label\", t: \"" + arr[i].substring(0, arr[i].indexOf("：单")) + "\"}, {e: \"select\", name: \"" + arr[i + 1] + "\", t: function (selectEle) {appendOption(selectEle, [" + a + "]);},\n" +
                            "event: {\n" +
                            "\tchange: function (selectEle) {\n" +
                            "\t\tvar detail = $(selectEle.sender).parent().find(\"input\");\n" +
                            "\t\tif (selectEle.new_data." + arr[i + 1] + " === \"" + item + "\") {detail.css(\"display\", \"inline\");} else {detail.css(\"display\", \"none\");}\n" +
                            "\t}}},\n" +
                            "\t\t\t\t\t\t\t{e: \"input\", name: \"" + arr[i + 1] + "_detail\", a: {\"placeholder\": \"请填入具体信息\"}" + display + "}]\n" +
                            "\t\t\t\t\t\t},");
                } else {
                    System.out.println("{e: \"f1\", t: [{e: \"label\", t: \"" + arr[i].substring(0, arr[i].indexOf("：单")) + "\"}, {e: \"select\", name: \"" + arr[i + 1] + "\",t: function (selectEle){appendOption(selectEle, [" + a + "],d.jdata." + arr[i + 1] + ");}}]},");

                }

            }
            //处理多行
            else if (arr[i].contains("可包括多行")) {
                String a = "";
                String b = "";
                String c = "";
                if (arr[i].contains("【")) {
                    String names = arr[i].substring(arr[i].indexOf("【") + 1, arr[i].indexOf("】"));
                    String[] nameArr = names.split("、");
                    for (String s : nameArr) {
                        a += "<th>" + s + "</th>";
                    }
                }
                if (arr[i].contains("[")) {
                    String names = arr[i].substring(arr[i].indexOf("[") + 1, arr[i].indexOf("]"));
                    String[] nameArr = names.split("/");
                    for (String s : nameArr) {
                        b += "<td><input name='" + arr[i + 1] + "_" + s + "'></td>";
                        c += "<td><input name=\"" + arr[i + 1] + "_" + s + "\"></td>";
                    }
                }

                if (arr[i].contains("【")) {
                    System.out.println("{\n" +
                            "\t\te: \"table\",\n" +
                            "\t\tt: [{\n" +
                            "\t\t\te: \"tr\",\n" +
                            "\t\t\tt: [\n" +
                            "\t\t\t\t\"" + a + "\"\n" +
                            "\t\t\t]\n" +
                            "\t\t},\n" +
                            "\t\t\t{\n" +
                            "\t\t\t\te: \"tr\",a:{class:\"" + arr[i + 1] + "_tr\"},\n" +
                            "\t\t\t\tt: [\"" + b + "\"],\n" +
                            "\t\t\t},\n" +
                            "\t\t\t{e:\"button\",t:\"+\",click:function(plusEle){$(plusEle.sender).before('<tr class=\"" + arr[i + 1] + "_tr\">" + c + "</tr>');}},\n" +
                            "\t\t\t{e:\"button\",t:\"-\",click:function(deleteEle){if($(deleteEle.sender).parent().find(\"tr\").length>1){$(deleteEle.sender).prev().prev(\"tr\").remove();}}}\n" +
                            "\t\t]\n" +
                            "\t},");
                } else {
                    /*System.out.println("{e: \"dl\",\n" +
                            "\t\tt: [{e: \"dt\", t: \"" + arr[i].substring(0, arr[i].indexOf("：")) + "\"},\n" +
                            "\t\t\t{e:\"dd\",t:[{e: \"input\", name: \"" + arr[i + 1] + "\"},]},\n" +
                            "\t\t\t{e:\"button\",t:\"+\",click:function(plusEle){$(plusEle.sender).before('<dd><input name=\"" + arr[i + 1] + "\"/></dd>');}},\n" +
                            "\t\t\t{e:\"button\",t:\"-\",click:function(deleteEle){$(deleteEle.sender).prev().prev(\"dd\").remove();}}\n" +
                            "\t\t\t]\n" +
                            "\t},");*/
                    System.out.println("{e: \"dl\",\n" +
                            "\t\tt: [{e: \"dt\", t: \"" + arr[i].substring(0, arr[i].indexOf("：")) + "\"},\n" +
                            "\t\t\t{\n" +
                            "\t\t\t\te: \"dd\",\n" +
                            "\t\t\t\tdatapath: \"" + arr[i + 1] + "\",\n" +
                            "\t\t\t\tt:function(r){\n" +
                            "\t\t\t\t\t$(r.container).render({\n" +
                            "\t\t\t\t\t\ttemplate:{e:\"input\",a:{name:\"" + arr[i + 1] + "\",value:r.data}}\n" +
                            "\t\t\t\t\t})\n" +
                            "\t\t\t\t}\n" +
                            "\t\t\t},\n" + "\t\t\t(d.jdata." + arr[i + 1] + "&&d.jdata." + arr[i + 1] + ".length>0)?\"\":\"<dd><input name='" + arr[i + 1] + "'/></dd>\",\n" +
                            "\t\t\t{e:\"button\",t:\"+\",click:function(plusEle){$(plusEle.sender).before('<dd><input name=\"" + arr[i + 1] + "\"/></dd>');}},\n" +
                            "\t\t\t{e:\"button\",t:\"-\",click:function(deleteEle){$(deleteEle.sender).prev().prev(\"dd\").remove();}}\n" +
                            "\t\t]\n" +
                            "\t},");
                }

            }
            //处理分开legend
            else if (arr[i + 1].equals("")) {
                System.out.println("{e: \"legend\", t: \"" + arr[i] + "\"},");
            } else {
                System.out.println("{e: \"f1\", t: [{e: \"label\", t: \"" + arr[i] + "\"}, {e: \"input\", name: \"" + arr[i + 1] + "\",a:{\"value\":\"[[" + arr[i + 1] + "]]\"?\"[[" + arr[i + 1] + "]]\":\"\"}}]},");
            }

        }
        System.out.println("]}");
    }
}

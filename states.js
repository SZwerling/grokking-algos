const fs = require('fs')



let raw = "06081 San Mateo County 06083 Santa Barbara County 06085 Santa Clara County 06087 Santa Cruz County 06089 Shasta County 06091 Sierra County 06093 Siskiyou County 06095 Solano County 06097 Sonoma County 06099 Stanislaus County 06101 Sutter County 06103 Tehama County 06105 Trinity County 06107 Tulare County 06109 Tuolumne County 06111 Ventura County 06113 Yolo County 06115 Yuba County 08000 Colorado 08001 Adams County 08003 Alamosa County 08005 Arapahoe County 08007 Archuleta County 08009 Baca County 08011 Bent County 08013 Boulder County 08015 Chaffee County 08017 Cheyenne County 08019 Clear Creek County 08021 Conejos County 08023 Costilla County 08025 Crowley County 08027 Custer County 08029 Delta County 08031 Denver County 08033 Dolores County 08035 Douglas County 08037 Eagle County 08039 Elbert County 08041 El Paso County 08043 Fremont County 08045 Garfield County 08047 Gilpin County 08049 Grand County 08051 Gunnison County 08053 Hinsdale County 08055 Huerfano County 08057 Jackson County 08059 Jefferson County 08061 Kiowa County 08063 Kit Carson County 08065 Lake County 08067 La Plata County 08069 Larimer County 08071 Las Animas County 08073 Lincoln County 08075 Logan County 08077 Mesa County 08079 Mineral County 08081 Moffat County 08083 Montezuma County 08085 Montrose County 08087 Morgan County 08089 Otero County 08091 Ouray County 08093 Park County 08095 Phillips County 08097 Pitkin County 08099 Prowers County 08101 Pueblo County 08103 Rio Blanco County 08105 Rio Grande County 08107 Routt County 08109 Saguache County 08111 San Juan County 08113 San Miguel County 08115 Sedgwick County 08117 Summit County 08119 Teller County 08121 Washington County 08123 Weld County 08125 Yuma County 09000 Connecticut 09001 Fairfield County 09003 Hartford County 09005 Litchfield County 09007 Middlesex County 09009 New Haven County 09011 New London County 09013 Tolland County 09015 Windham County 10000 Delaware 10001 Kent County 10003 New Castle County 10005 Sussex County 11000 District of Columbia 11001 District of Columbia 12000 Florida 12001 Alachua County 12003 Baker County 12005 Bay County 12007 Bradford County 12009 Brevard County 12011 Broward County 12013 Calhoun County 12015 Charlotte County 12017 Citrus County 12019 Clay County 12021 Collier County 12023 Columbia County 12025 Dade County 12027 DeSoto County 12029 Dixie County 12031 Duval County 12033 Escambia County 12035 Flagler County 12037 Franklin County 12039 Gadsden County 12041 Gilchrist County 12043 Glades County 12045 Gulf County 12047 Hamilton County 12049 Hardee County 12051 Hendry County 12053 Hernando County 12055 Highlands County 12057 Hillsborough County 12059 Holmes County 12061 Indian River County 12063 Jackson County 12065 Jefferson County 12067 Lafayette County 12069 Lake County 12071 Lee County 12073 Leon County 12075 Levy County 12077 Liberty County 12079 Madison County 12081 Manatee County 12083 Marion County 12085 Martin County 12087 Monroe County 12089 Nassau County 12091 Okaloosa County 12093 Okeechobee County 12095 Orange County 12097 Osceola County 12099 Palm Beach County 12101 Pasco County 12103 Pinellas County 12105 Polk County 12107 Putnam County 12109 St. Johns County 12111 St. Lucie County 12113 Santa Rosa County 12115 Sarasota County 12117 Seminole County 12119 Sumter County 12121 Suwannee County 12123 Taylor County 12125 Union County 12127 Volusia County 12129 Wakulla County 12131 Walton County 12133 Washington County 13000 Georgia 13001 Appling County 13003 Atkinson County 13005 Bacon County 13007 Baker County 13009 Baldwin County 13011 Banks County 13013 Barrow County 13015 Bartow County 13017 Ben Hill County 13019 Berrien County 13021 Bibb County 13023 Bleckley County 13025 Brantley County 13027 Brooks County 13029 Bryan County 13031 Bulloch County 13033 Burke County 13035 Butts County 13037 Calhoun County 13039 Camden County 13043 Candler County 13045 Carroll County 13047 Catoosa County 13049 Charlton County 13051 Chatham County 13053 Chattahoochee County 13055 Chattooga County 13057 Cherokee County 13059 Clarke County 13061 Clay County 13063 Clayton County 13065 Clinch County 13067 Cobb County 13069 Coffee County 13071 Colquitt County 13073 Columbia County 13075 Cook County 13077 Coweta County 13079 Crawford County 13081 Crisp County 13083 Dade County 13085 Dawson County 13087 Decatur County 13089 DeKalb County 13091 Dodge County 13093 Dooly County 13095 Dougherty County 13097 Douglas County 13099 Early County 13101 Echols County 13103 Effingham County 13105 Elbert County 13107 Emanuel County 13109 Evans County 13111 Fannin County 13113 Fayette County 13115 Floyd County 13117 Forsyth County 13119 Franklin County 13121 Fulton County 13123 Gilmer County 13125 Glascock County 13127 Glynn County 13129 Gordon County 13131 Grady County 13133 Greene County 13135 Gwinnett County 13137 Habersham County 13139 Hall County 13141 Hancock County 13143 Haralson County 13145 Harris County 13147 Hart County 13149 Heard County 13151 Henry County 13153 Houston County 13155 Irwin County 13157 Jackson County 13159 Jasper County 13161 Jeff Davis County 13163 Jefferson County 13165 Jenkins County 13167 Johnson County 13169 Jones County 13171 Lamar County 13173 Lanier County 13175 Laurens County 13177 Lee County 13179 Liberty County 13181 Lincoln County 13183 Long County 13185 Lowndes County 13187 Lumpkin County 13189 McDuffie County 13191 McIntosh County 13193 Macon County 13195 Madison County 13197 Marion County 13199 Meriwether County 13201 Miller County 13205 Mitchell County 13207 Monroe County 13209 Montgomery County 13211 Morgan County 13213 Murray County 13215 Muscogee County 13217 Newton County 13219 Oconee County 13221 Oglethorpe County 13223 Paulding County 13225 Peach County 13227 Pickens County 13229 Pierce County 13231 Pike County 13233 Polk County 13235 Pulaski County 13237 Putnam County 13239 Quitman County 13241 Rabun County 13243 Randolph County 13245 Richmond County 13247 Rockdale County 13249 Schley County 13251 Screven County 13253 Seminole County 13255 Spalding County 13257 Stephens County 13259 Stewart County 13261 Sumter County 13263 Talbot County 13265 Taliaferro County 13267 Tattnall County 13269 Taylor County 13271 Telfair County 13273 Terrell County 13275 Thomas County 13277 Tift County 13279 Toombs County 13281 Towns County 13283 Treutlen County 13285 Troup County 13287 Turner County 13289 Twiggs County 13291 Union County 13293 Upson County 13295 Walker County 13297 Walton County 13299 Ware County 13301 Warren County 13303 Washington County 13305 Wayne County 13307 Webster County 13309 Wheeler County 13311 White County 13313 Whitfield County 13315 Wilcox County 13317 Wilkes County 13319 Wilkinson County 13321 Worth County 15000 Hawaii 15001 Hawaii County 15003 Honolulu County 15005 Kalawao County 15007 Kauai County 15009 Maui County 16000 Idaho 16001 Ada County 16003 Adams County 16005 Bannock County 16007 Bear Lake County 16009 Benewah County 16011 Bingham County 16013 Blaine County 16015 Boise County 16017 Bonner County 16019 Bonneville County 16021 Boundary County 16023 Butte County 16025 Camas County 16027 Canyon County 16029 Caribou County 16031 Cassia County 16033 Clark County 16035 Clearwater County 16037 Custer County 16039 Elmore County 16041 Franklin County 16043 Fremont County 16045 Gem County 16047 Gooding County 16049 Idaho County 16051 Jefferson County 16053 Jerome County 16055 Kootenai County 16057 Latah County 16059 Lemhi County 16061 Lewis County 16063 Lincoln County 16065 Madison County 16067 Minidoka County 16069 Nez Perce County 16071 Oneida County 16073 Owyhee County 16075 Payette County 16077 Power County 16079 Shoshone County 16081 Teton County 16083 Twin Falls County 16085 Valley County 16087 Washington County 17000 Illinois 17001 Adams County 17003 Alexander County 17005 Bond County 17007 Boone County 17009 Brown County 17011 Bureau County 17013 Calhoun County 17015 Carroll County 17017 Cass County 17019 Champaign County 17021 Christian County 17023 Clark County 17025 Clay County 17027 Clinton County 17029 Coles County 17031 Cook County 17033 Crawford County 17035 Cumberland County 17037 DeKalb County 17039 De Witt County 17041 Douglas County 17043 DuPage County 17045 Edgar County 17047 Edwards County 17049 Effingham County 17051 Fayette County 17053 Ford County 17055 Franklin County 17057 Fulton County 17059 Gallatin County 17061 Greene County 17063 Grundy County 17065 Hamilton County 17067 Hancock County 17069 Hardin County 17071 Henderson County 17073 Henry County 17075 Iroquois County 17077 Jackson County 17079 Jasper County 17081 Jefferson County 17083 Jersey County 17085 Jo Daviess County 17087 Johnson County 17089 Kane County 17091 Kankakee County 17093 Kendall County 17095 Knox County 17097 Lake County 17099 La Salle County 17101 Lawrence County 17103 Lee County 17105 Livingston County 17107 Logan County 17109 McDonough County 17111 McHenry County 17113 McLean County 17115 Macon County 17117 Macoupin County 17119 Madison County 17121 Marion County 17123 Marshall County 17125 Mason County 17127 Massac County 17129 Menard County 17131 Mercer County 17133 Monroe County 17135 Montgomery County 17137 Morgan County 17139 Moultrie County 17141 Ogle County 17143 Peoria County 17145 Perry County 17147 Piatt County 17149 Pike County 17151 Pope County 17153 Pulaski County 17155 Putnam County 17157 Randolph County 17159 Richland County 17161 Rock Island County 17163 St. Clair County 17165 Saline County 17167 Sangamon County 17169 Schuyler County 17171 Scott County 17173 Shelby County 17175 Stark County 17177 Stephenson County 17179 Tazewell County 17181 Union County 17183 Vermilion County 17185 Wabash County 17187 Warren County 17189 Washington County 17191 Wayne County 17193 White County 17195 Whiteside County 17197 Will County 17199 Williamson County 17201 Winnebago County 17203 Woodford County 18000 Indiana 18001 Adams County 18003 Allen County 18005 Bartholomew County 18007 Benton County 18009 Blackford County 18011 Boone County 18013 Brown County 18015 Carroll County 18017 Cass County 18019 Clark County 18021 Clay County 18023 Clinton County 18025 Crawford County 18027 Daviess County 18029 Dearborn County 18031 Decatur County 18033 De Kalb County 18035 Delaware County 18037 Dubois County 18039 Elkhart County 18041 Fayette County 18043 Floyd County 18045 Fountain County 18047 Franklin County 18049 Fulton County 18051 Gibson County 18053 Grant County 18055 Greene County 18057 Hamilton County 18059 Hancock County 18061 Harrison County 18063 Hendricks County 18065 Henry County 18067 Howard County 18069 Huntington County 18071 Jackson County 18073 Jasper County 18075 Jay County 18077 Jefferson County 18079 Jennings County 18081 Johnson County 18083 Knox County 18085 Kosciusko County 18087 Lagrange County 18089 Lake County 18091 La Porte County 18093 Lawrence County 18095 Madison County 18097 Marion County 18099 Marshall County 18101 Martin County 18103 Miami County 18105 Monroe County 18107 Montgomery County 18109 Morgan County 18111 Newton County 18113 Noble County 18115 Ohio County 18117 Orange County 18119 Owen County 18121 Parke County 18123 Perry County 18125 Pike County 18127 Porter County 18129 Posey County 18131 Pulaski County 18133 Putnam County 18135 Randolph County 18137 Ripley County 18139 Rush County 18141 St. Joseph County 18143 Scott County 18145 Shelby County 18147 Spencer County 18149 Starke County 18151 Steuben County 18153 Sullivan County 18155 Switzerland County 18157 Tippecanoe County 18159 Tipton County 18161 Union County 18163 Vanderburgh County 18165 Vermillion County 18167 Vigo County 18169 Wabash County 18171 Warren County 18173 Warrick County 18175 Washington County 18177 Wayne County 18179 Wells County 18181 White County 18183 Whitley County 19000 Iowa 19001 Adair County 19003 Adams County 19005 Allamakee County 19007 Appanoose County 19009 Audubon County 19011 Benton County 19013 Black Hawk County 19015 Boone County 19017 Bremer County 19019 Buchanan County 19021 Buena Vista County 19023 Butler County 19025 Calhoun County 19027 Carroll County 19029 Cass County 19031 Cedar County 19033 Cerro Gordo County 19035 Cherokee County 19037 Chickasaw County 19039 Clarke County 19041 Clay County 19043 Clayton County 19045 Clinton County 19047 Crawford County 19049 Dallas County 19051 Davis County 19053 Decatur County 19055 Delaware County 19057 Des Moines County 19059 Dickinson County 19061 Dubuque County 19063 Emmet County 19065 Fayette County 19067 Floyd County 19069 Franklin County 19071 Fremont County 19073 Greene County 19075 Grundy County 19077 Guthrie County 19079 Hamilton County 19081 Hancock County 19083 Hardin County 19085 Harrison County 19087 Henry County 19089 Howard County 19091 Humboldt County 19093 Ida County 19095 Iowa County 19097 Jackson County 19099 Jasper County 19101 Jefferson County 19103 Johnson County 19105 Jones County 19107 Keokuk County 19109 Kossuth County 19111 Lee County 19113 Linn County 19115 Louisa County 19117 Lucas County 19119 Lyon County 19121 Madison County 19123 Mahaska County 19125 Marion County 19127 Marshall County 19129 Mills County 19131 Mitchell County 19133 Monona County 19135 Monroe County 19137 Montgomery County 19139 Muscatine County 19141 O 19143 Osceola County 19145 Page County 19147 Palo Alto County 19149 Plymouth County 19151 Pocahontas County 19153 Polk County 19155 Pottawattamie County 19157 Poweshiek County 19159 Ringgold County 19161 Sac County 19163 Scott County 19165 Shelby County 19167 Sioux County 19169 Story County 19171 Tama County 19173 Taylor County 19175 Union County 19177 Van Buren County 19179 Wapello County 19181 Warren County 19183 Washington County 19185 Wayne County 19187 Webster County 19189 Winnebago County 19191 Winneshiek County 19193 Woodbury County 19195 Worth County 19197 Wright County 20000 Kansas 20001 Allen County 20003 Anderson County 20005 Atchison County 20007 Barber County 20009 Barton County 20011 Bourbon County 20013 Brown County 20015 Butler County 20017 Chase County 20019 Chautauqua County 20021 Cherokee County 20023 Cheyenne County 20025 Clark County 20027 Clay County 20029 Cloud County 20031 Coffey County 20033 Comanche County 20035 Cowley County 20037 Crawford County 20039 Decatur County 20041 Dickinson County 20043 Doniphan County 20045 Douglas County 20047 Edwards County 20049 Elk County 20051 Ellis County 20053 Ellsworth County 20055 Finney County 20057 Ford County 20059 Franklin County 20061 Geary County 20063 Gove County 20065 Graham County 20067 Grant County 20069 Gray County 20071 Greeley County 20073 Greenwood County 20075 Hamilton County 20077 Harper County 20079 Harvey County 20081 Haskell County 20083 Hodgeman County 20085 Jackson County 20087 Jefferson County 20089 Jewell County 20091 Johnson County 20093 Kearny County 20095 Kingman County 20097 Kiowa County 20099 Labette County 20101 Lane County 20103 Leavenworth County 20105 Lincoln County 20107 Linn County 20109 Logan County 20111 Lyon County 20113 McPherson County 20115 Marion County 20117 Marshall County 20119 Meade County 20121 Miami County 20123 Mitchell County 20125 Montgomery County 20127 Morris County 20129 Morton County 20131 Nemaha County 20133 Neosho County 20135 Ness County 20137 Norton County 20139 Osage County 20141 Osborne County 20143 Ottawa County 20145 Pawnee County 20147 Phillips County 20149 Pottawatomie County 20151 Pratt County 20153 Rawlins County 20155 Reno County 20157 Republic County 20159 Rice County 20161 Riley County 20163 Rooks County 20165 Rush County 20167 Russell County 20169 Saline County 20171 Scott County 20173 Sedgwick County 20175 Seward County 20177 Shawnee County 20179 Sheridan County 20181 Sherman County 20183 Smith County 20185 Stafford County 20187 Stanton County 20189 Stevens County 20191 Sumner County 20193 Thomas County 20195 Trego County 20197 Wabaunsee County 20199 Wallace County 20201 Washington County 20203 Wichita County 20205 Wilson County 20207 Woodson County 20209 Wyandotte County 21000 Kentucky 21001 Adair County 21003 Allen County 21005 Anderson County 21007 Ballard County 21009 Barren County 21011 Bath County 21013 Bell County 21015 Boone County 21017 Bourbon County 21019 Boyd County 21021 Boyle County 21023 Bracken County 21025 Breathitt County 21027 Breckinridge County 21029 Bullitt County 21031 Butler County 21033 Caldwell County 21035 Calloway County 21037 Campbell County 21039 Carlisle County 21041 Carroll County 21043 Carter County 21045 Casey County 21047 Christian County 21049 Clark County 21051 Clay County 21053 Clinton County 21055 Crittenden County 21057 Cumberland County 21059 Daviess County 21061 Edmonson County 21063 Elliott County 21065 Estill County 21067 Fayette County 21069 Fleming County 21071 Floyd County 21073 Franklin County 21075 Fulton County 21077 Gallatin County 21079 Garrard County 21081 Grant County 21083 Graves County 21085 Grayson County 21087 Green County 21089 Greenup County 21091 Hancock County 21093 Hardin County 21095 Harlan County 21097 Harrison County 21099 Hart County 21101 Henderson County 21103 Henry County 21105 Hickman County 21107 Hopkins County 21109 Jackson County 21111 Jefferson County 21113 Jessamine County 21115 Johnson County 21117 Kenton County 21119 Knott County 21121 Knox County 21123 Larue County 21125 Laurel County 21127 Lawrence County 21129 Lee County 21131 Leslie County 21133 Letcher County 21135 Lewis County 21137 Lincoln County 21139 Livingston County 21141 Logan County 21143 Lyon County 21145 McCracken County 21147 McCreary County 21149 McLean County 21151 Madison County 21153 Magoffin County 21155 Marion County 21157 Marshall County 21159 Martin County 21161 Mason County 21163 Meade County 21165 Menifee County 21167 Mercer County 21169 Metcalfe County 21171 Monroe County 21173 Montgomery County 21175 Morgan County 21177 Muhlenberg County 21179 Nelson County 21181 Nicholas County 21183 Ohio County 21185 Oldham County 21187 Owen County 21189 Owsley County 21191 Pendleton County 21193 Perry County 21195 Pike County 21197 Powell County 21199 Pulaski County 21201 Robertson County 21203 Rockcastle County 21205 Rowan County 21207 Russell County 21209 Scott County 21211 Shelby County 21213 Simpson County 21215 Spencer County 21217 Taylor County 21219 Todd County 21221 Trigg County 21223 Trimble County 21225 Union County 21227 Warren County 21229 Washington County 21231 Wayne County 21233 Webster County 21235 Whitley County 21237 Wolfe County 21239 Woodford County 22000 Louisiana 22001 Acadia Parish 22003 Allen Parish 22005 Ascension Parish 22007 Assumption Parish 22009 Avoyelles Parish 22011 Beauregard Parish 22013 Bienville Parish 22015 Bossier Parish 22017 Caddo Parish 22019 Calcasieu Parish 22021 Caldwell Parish 22023 Cameron Parish 22025 Catahoula Parish 22027 Claiborne Parish 22029 Concordia Parish 22031 De Soto Parish 22033 East Baton Rouge Parish 22035 East Carroll Parish 22037 East Feliciana Parish 22039 Evangeline Parish 22041 Franklin Parish 22043 Grant Parish 22045 Iberia Parish 22047 Iberville Parish 22049 Jackson Parish 22051 Jefferson Parish 22053 Jefferson Davis Parish 22055 Lafayette Parish 22057 Lafourche Parish 22059 La Salle Parish 22061 Lincoln Parish 22063 Livingston Parish 22065 Madison Parish 22067 Morehouse Parish 22069 Natchitoches Parish 22071 Orleans Parish 22073 Ouachita Parish 22075 Plaquemines Parish 22077 Pointe Coupee Parish 22079 Rapides Parish 22081 Red River Parish 22083 Richland Parish 22085 Sabine Parish 22087 St. Bernard Parish 22089 St. Charles Parish 22091 St. Helena Parish 22093 St. James Parish 22095 St. John the Baptist Parish 22097 St. Landry Parish 22099 St. Martin Parish 22101 St. Mary Parish 22103 St. Tammany Parish 22105 Tangipahoa Parish 22107 Tensas Parish 22109 Terrebonne Parish 22111 Union Parish 22113 Vermilion Parish 22115 Vernon Parish 22117 Washington Parish 22119 Webster Parish 22121 West Baton Rouge Parish 22123 West Carroll Parish 22125 West Feliciana Parish 22127 Winn Parish 23000 Maine 23001 Androscoggin County 23003 Aroostook County 23005 Cumberland County 23007 Franklin County 23009 Hancock County 23011 Kennebec County 23013 Knox County 23015 Lincoln County 23017 Oxford County 23019 Penobscot County 23021 Piscataquis County 23023 Sagadahoc County 23025 Somerset County 23027 Waldo County 23029 Washington County 23031 York County 24000 Maryland 24001 Allegany County 24003 Anne Arundel County 24005 Baltimore County 24009 Calvert County 24011 Caroline County 24013 Carroll County 24015 Cecil County 24017 Charles County 24019 Dorchester County 24021 Frederick County 24023 Garrett County 24025 Harford County 24027 Howard County 24029 Kent County 24031 Montgomery County 24033 Prince George 24035 Queen Anne 24037 St. Mary 24039 Somerset County 24041 Talbot County 24043 Washington County 24045 Wicomico County 24047 Worcester County 24510 Baltimore city 25000 Massachusetts 25001 Barnstable County 25003 Berkshire County 25005 Bristol County 25007 Dukes County 25009 Essex County 25011 Franklin County 25013 Hampden County 25015 Hampshire County 25017 Middlesex County 25019 Nantucket County 25021 Norfolk County 25023 Plymouth County 25025 Suffolk County 25027 Worcester County 26000 Michigan 26001 Alcona County 26003 Alger County 26005 Allegan County 26007 Alpena County 26009 Antrim County 26011 Arenac County 26013 Baraga County 26015 Barry County 26017 Bay County 26019 Benzie County 26021 Berrien County 26023 Branch County 26025 Calhoun County 26027 Cass County 26029 Charlevoix County 26031 Cheboygan County 26033 Chippewa County 26035 Clare County 26037 Clinton County 26039 Crawford County 26041 Delta County 26043 Dickinson County 26045 Eaton County 26047 Emmet County 26049 Genesee County 26051 Gladwin County 26053 Gogebic County 26055 Grand Traverse County 26057 Gratiot County 26059 Hillsdale County 26061 Houghton County 26063 Huron County 26065 Ingham County 26067 Ionia County 26069 Iosco County 26071 Iron County 26073 Isabella County 26075 Jackson County 26077 Kalamazoo County 26079 Kalkaska County 26081 Kent County 26083 Keweenaw County 26085 Lake County 26087 Lapeer County 26089 Leelanau County 26091 Lenawee County 26093 Livingston County 26095 Luce County 26097 Mackinac County 26099 Macomb County 26101 Manistee County 26103 Marquette County 26105 Mason County 26107 Mecosta County 26109 Menominee County 26111 Midland County 26113 Missaukee County 26115 Monroe County 26117 Montcalm County 26119 Montmorency County 26121 Muskegon County 26123 Newaygo County 26125 Oakland County 26127 Oceana County 26129 Ogemaw County 26131 Ontonagon County 26133 Osceola County 26135 Oscoda County 26137 Otsego County 26139 Ottawa County 26141 Presque Isle County 26143 Roscommon County 26145 Saginaw County 26147 St. Clair County 26149 St. Joseph County 26151 Sanilac County 26153 Schoolcraft County 26155 Shiawassee County 26157 Tuscola County 26159 Van Buren County 26161 Washtenaw County 26163 Wayne County 26165 Wexford County 27000 Minnesota 27001 Aitkin County 27003 Anoka County 27005 Becker County 27007 Beltrami County 27009 Benton County 27011 Big Stone County 27013 Blue Earth County 27015 Brown County 27017 Carlton County 27019 Carver County 27021 Cass County 27023 Chippewa County 27025 Chisago County 27027 Clay County 27029 Clearwater County 27031 Cook County 27033 Cottonwood County 27035 Crow Wing County 27037 Dakota County 27039 Dodge County 27041 Douglas County 27043 Faribault County 27045 Fillmore County 27047 Freeborn County 27049 Goodhue County 27051 Grant County 27053 Hennepin County 27055 Houston County 27057 Hubbard County 27059 Isanti County 27061 Itasca County 27063 Jackson County 27065 Kanabec County 27067 Kandiyohi County 27069 Kittson County 27071 Koochiching County 27073 Lac qui Parle County 27075 Lake County 27077 Lake of the Woods County 27079 Le Sueur County 27081 Lincoln County 27083 Lyon County 27085 McLeod County 27087 Mahnomen County 27089 Marshall County 27091 Martin County 27093 Meeker County 27095 Mille Lacs County 27097 Morrison County 27099 Mower County 27101 Murray County 27103 Nicollet County 27105 Nobles County 27107 Norman County 27109 Olmsted County 27111 Otter Tail County 27113 Pennington County 27115 Pine County 27117 Pipestone County 27119 Polk County 27121 Pope County 27123 Ramsey County 27125 Red Lake County 27127 Redwood County 27129 Renville County 27131 Rice County 27133 Rock County 27135 Roseau County 27137 St. Louis County 27139 Scott County 27141 Sherburne County 27143 Sibley County 27145 Stearns County 27147 Steele County 27149 Stevens County 27151 Swift County 27153 Todd County 27155 Traverse County 27157 Wabasha County 27159 Wadena County 27161 Waseca County 27163 Washington County 27165 Watonwan County 27167 Wilkin County 27169 Winona County 27171 Wright County 27173 Yellow Medicine County 28000 Mississippi 28001 Adams County 28003 Alcorn County 28005 Amite County 28007 Attala County 28009 Benton County 28011 Bolivar County 28013 Calhoun County 28015 Carroll County 28017 Chickasaw County 28019 Choctaw County 28021 Claiborne County 28023 Clarke County 28025 Clay County 28027 Coahoma County 28029 Copiah County 28031 Covington County 28033 DeSoto County 28035 Forrest County 28037 Franklin County 28039 George County 28041 Greene County 28043 Grenada County 28045 Hancock County 28047 Harrison County 28049 Hinds County 28051 Holmes County 28053 Humphreys County 28055 Issaquena County 28057 Itawamba County 28059 Jackson County 28061 Jasper County 28063 Jefferson County 28065 Jefferson Davis County 28067 Jones County 28069 Kemper County 28071 Lafayette County 28073 Lamar County 28075 Lauderdale County 28077 Lawrence County 28079 Leake County 28081 Lee County 28083 Leflore County 28085 Lincoln County 28087 Lowndes County 28089 Madison County 28091 Marion County 28093 Marshall County 28095 Monroe County 28097 Montgomery County 28099 Neshoba County 28101 Newton County 28103 Noxubee County 28105 Oktibbeha County 28107 Panola County 28109 Pearl River County 28111 Perry County 28113 Pike County 28115 Pontotoc County 28117 Prentiss County 28119 Quitman County 28121 Rankin County 28123 Scott County 28125 Sharkey County 28127 Simpson County 28129 Smith County 28131 Stone County 28133 Sunflower County 28135 Tallahatchie County 28137 Tate County 28139 Tippah County 28141 Tishomingo County 28143 Tunica County 28145 Union County 28147 Walthall County 28149 Warren County 28151 Washington County 28153 Wayne County 28155 Webster County 28157 Wilkinson County 28159 Winston County 28161 Yalobusha County 28163 Yazoo County 29000 Missouri 29001 Adair County 29003 Andrew County 29005 Atchison County 29007 Audrain County 29009 Barry County 29011 Barton County 29013 Bates County 29015 Benton County 29017 Bollinger County 29019 Boone County 29021 Buchanan County 29023 Butler County 29025 Caldwell County 29027 Callaway County 29029 Camden County 29031 Cape Girardeau County 29033 Carroll County 29035 Carter County 29037 Cass County 29039 Cedar County 29041 Chariton County 29043 Christian County 29045 Clark County 29047 Clay County 29049 Clinton County 29051 Cole County 29053 Cooper County 29055 Crawford County 29057 Dade County 29059 Dallas County 29061 Daviess County 29063 DeKalb County 29065 Dent County 29067 Douglas County 29069 Dunklin County 29071 Franklin County 29073 Gasconade County 29075 Gentry County 29077 Greene County 29079 Grundy County 29081 Harrison County 29083 Henry County 29085 Hickory County 29087 Holt County 29089 Howard County 29091 Howell County 29093 Iron County 29095 Jackson County 29097 Jasper County 29099 Jefferson County 29101 Johnson County 29103 Knox County 29105 Laclede County 29107 Lafayette County 29109 Lawrence County 29111 Lewis County 29113 Lincoln County 29115 Linn County 29117 Livingston County 29119 McDonald County 29121 Macon County 29123 Madison County 29125 Maries County 29127 Marion County 29129 Mercer County 29131 Miller County 29133 Mississippi County 29135 Moniteau County 29137 Monroe County 29139 Montgomery County 29141 Morgan County 29143 New Madrid County 29145 Newton County 29147 Nodaway County 29149 Oregon County 29151 Osage County 29153 Ozark County 29155 Pemiscot County 29157 Perry County 29159 Pettis County 29161 Phelps County 29163 Pike County 29165 Platte County 29167 Polk County 29169 Pulaski County 29171 Putnam County 29173 Ralls County 29175 Randolph County 29177 Ray County 29179 Reynolds County 29181 Ripley County 29183 St. Charles County 29185 St. Clair County 29186 Ste. Genevieve County 29187 St. Francois County 29189 St. Louis County 29195 Saline County 29197 Schuyler County 29199 Scotland County 29201 Scott County 29203 Shannon County 29205 Shelby County 29207 Stoddard County 29209 Stone County 29211 Sullivan County 29213 Taney County 29215 Texas County 29217 Vernon County 29219 Warren County 29221 Washington County 29223 Wayne County 29225 Webster County 29227 Worth County 29229 Wright County 29510 St. Louis city 30000 Montana 30001 Beaverhead County 30003 Big Horn County 30005 Blaine County 30007 Broadwater County 30009 Carbon County 30011 Carter County 30013 Cascade County 30015 Chouteau County 30017 Custer County 30019 Daniels County 30021 Dawson County 30023 Deer Lodge County 30025 Fallon County 30027 Fergus County 30029 Flathead County 30031 Gallatin County 30033 Garfield County 30035 Glacier County 30037 Golden Valley County 30039 Granite County 30041 Hill County 30043 Jefferson County 30045 Judith Basin County 30047 Lake County 30049 Lewis and Clark County 30051 Liberty County 30053 Lincoln County 30055 McCone County 30057 Madison County 30059 Meagher County 30061 Mineral County 30063 Missoula County 30065 Musselshell County 30067 Park County 30069 Petroleum County 30071 Phillips County 30073 Pondera County 30075 Powder River County 30077 Powell County 30079 Prairie County 30081 Ravalli County 30083 Richland County 30085 Roosevelt County 30087 Rosebud County 30089 Sanders County 30091 Sheridan County 30093 Silver Bow County 30095 Stillwater County 30097 Sweet Grass County 30099 Teton County 30101 Toole County 30103 Treasure County 30105 Valley County 30107 Wheatland County 30109 Wibaux County 30111 Yellowstone County 30113 Yellowstone National Park 31000 Nebraska 31001 Adams County 31003 Antelope County 31005 Arthur County 31007 Banner County 31009 Blaine County 31011 Boone County 31013 Box Butte County 31015 Boyd County 31017 Brown County 31019 Buffalo County 31021 Burt County 31023 Butler County 31025 Cass County 31027 Cedar County 31029 Chase County 31031 Cherry County 31033 Cheyenne County 31035 Clay County 31037 Colfax County 31039 Cuming County 31041 Custer County 31043 Dakota County 31045 Dawes County 31047 Dawson County 31049 Deuel County 31051 Dixon County 31053 Dodge County 31055 Douglas County 31057 Dundy County 31059 Fillmore County 31061 Franklin County 31063 Frontier County 31065 Furnas County 31067 Gage County 31069 Garden County 31071 Garfield County 31073 Gosper County 31075 Grant County 31077 Greeley County 31079 Hall County 31081 Hamilton County 31083 Harlan County 31085 Hayes County 31087 Hitchcock County 31089 Holt County 31091 Hooker County 31093 Howard County 31095 Jefferson County 31097 Johnson County 31099 Kearney County 31101 Keith County 31103 Keya Paha County 31105 Kimball County 31107 Knox County 31109 Lancaster County 31111 Lincoln County 31113 Logan County 31115 Loup County 31117 McPherson County 31119 Madison County 31121 Merrick County 31123 Morrill County 31125 Nance County 31127 Nemaha County 31129 Nuckolls County 31131 Otoe County 31133 Pawnee County 31135 Perkins County 31137 Phelps County 31139 Pierce County 31141 Platte County 31143 Polk County 31145 Red Willow County 31147 Richardson County 31149 Rock County 31151 Saline County 31153 Sarpy County 31155 Saunders County 31157 Scotts Bluff County 31159 Seward County 31161 Sheridan County 31163 Sherman County 31165 Sioux County 31167 Stanton County 31169 Thayer County 31171 Thomas County 31173 Thurston County 31175 Valley County 31177 Washington County 31179 Wayne County 31181 Webster County 31183 Wheeler County 31185 York County 32000 Nevada 32001 Churchill County 32003 Clark County 32005 Douglas County 32007 Elko County 32009 Esmeralda County 32011 Eureka County 32013 Humboldt County 32015 Lander County 32017 Lincoln County 32019 Lyon County 32021 Mineral County 32023 Nye County 32027 Pershing County 32029 Storey County 32031 Washoe County 32033 White Pine County 32510 Carson City 33000 New Hampshire 33001 Belknap County 33003 Carroll County 33005 Cheshire County 33007 Coos County 33009 Grafton County 33011 Hillsborough County 33013 Merrimack County 33015 Rockingham County 33017 Strafford County 33019 Sullivan County 34000 New Jersey 34001 Atlantic County 34003 Bergen County 34005 Burlington County 34007 Camden County 34009 Cape May County 34011 Cumberland County 34013 Essex County 34015 Gloucester County 34017 Hudson County 34019 Hunterdon County 34021 Mercer County 34023 Middlesex County 34025 Monmouth County 34027 Morris County 34029 Ocean County 34031 Passaic County 34033 Salem County 34035 Somerset County 34037 Sussex County 34039 Union County 34041 Warren County 35000 New Mexico 35001 Bernalillo County 35003 Catron County 35005 Chaves County 35006 Cibola County 35007 Colfax County 35009 Curry County 35011 DeBaca County 35013 Dona Ana County 35015 Eddy County 35017 Grant County 35019 Guadalupe County 35021 Harding County 35023 Hidalgo County 35025 Lea County 35027 Lincoln County 35028 Los Alamos County 35029 Luna County 35031 McKinley County 35033 Mora County 35035 Otero County 35037 Quay County 35039 Rio Arriba County 35041 Roosevelt County 35043 Sandoval County 35045 San Juan County 35047 San Miguel County 35049 Santa Fe County 35051 Sierra County 35053 Socorro County 35055 Taos County 35057 Torrance County 35059 Union County 35061 Valencia County 36000 New York 36001 Albany County 36003 Allegany County 36005 Bronx County 36007 Broome County 36009 Cattaraugus County 36011 Cayuga County 36013 Chautauqua County 36015 Chemung County 36017 Chenango County 36019 Clinton County 36021 Columbia County 36023 Cortland County 36025 Delaware County 36027 Dutchess County 36029 Erie County 36031 Essex County 36033 Franklin County 36035 Fulton County 36037 Genesee County 36039 Greene County 36041 Hamilton County 36043 Herkimer County 36045 Jefferson County 36047 Kings County 36049 Lewis County 36051 Livingston County 36053 Madison County 36055 Monroe County 36057 Montgomery County 36059 Nassau County 36061 New York County 36063 Niagara County 36065 Oneida County 36067 Onondaga County 36069 Ontario County 36071 Orange County 36073 Orleans County 36075 Oswego County 36077 Otsego County 36079 Putnam County 36081 Queens County 36083 Rensselaer County 36085 Richmond County 36087 Rockland County 36089 St. Lawrence County 36091 Saratoga County 36093 Schenectady County 36095 Schoharie County 36097 Schuyler County 36099 Seneca County 36101 Steuben County 36103 Suffolk County 36105 Sullivan County 36107 Tioga County 36109 Tompkins County 36111 Ulster County 36113 Warren County 36115 Washington County 36117 Wayne County 36119 Westchester County 36121 Wyoming County 36123 Yates County 37000 North Carolina 37001 Alamance County 37003 Alexander County 37005 Alleghany County 37007 Anson County 37009 Ashe County 37011 Avery County 37013 Beaufort County 37015 Bertie County 37017 Bladen County 37019 Brunswick County 37021 Buncombe County 37023 Burke County 37025 Cabarrus County 37027 Caldwell County 37029 Camden County 37031 Carteret County 37033 Caswell County 37035 Catawba County 37037 Chatham County 37039 Cherokee County 37041 Chowan County 37043 Clay County 37045 Cleveland County 37047 Columbus County 37049 Craven County 37051 Cumberland County 37053 Currituck County 37055 Dare County 37057 Davidson County 37059 Davie County 37061 Duplin County 37063 Durham County 37065 Edgecombe County 37067 Forsyth County 37069 Franklin County 37071 Gaston County 37073 Gates County 37075 Graham County 37077 Granville County 37079 Greene County 37081 Guilford County 37083 Halifax County 37085 Harnett County 37087 Haywood County 37089 Henderson County 37091 Hertford County 37093 Hoke County 37095 Hyde County 37097 Iredell County 37099 Jackson County 37101 Johnston County 37103 Jones County"
let countiesArr = []
let code = ""
let county = ""
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
for (let i = 0; i < raw.length; i++) {
    if (numbers.includes(raw[i])) {
        code = code + raw[i]
    } else {
        county = county + raw[i]
        if (numbers.includes(raw[i + 1]) || i+1 === raw.length) {
           countiesArr.push({ county: county.trim().toUpperCase(), code})
            code = ""
            county = ""
        }
    }
}

//console.log(JSON.stringify(countiesArr))
//fs.writeFileSync('county-fips.js', countiesArr)
fs.writeFile(

    './my.json',

    JSON.stringify(countiesArr, null, 1),

    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
);



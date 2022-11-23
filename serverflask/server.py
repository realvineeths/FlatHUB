import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
# cors = CORS(app)
import pickle

app = Flask(__name__)
model = pickle.load(open('model_final.pkl','rb'))
warehouse={'Agartala': 0, 'Agra': 1, 'Ahmednagar': 2, 'Ajmer': 3, 'Akola': 4, 
'Aligarh': 5, 'Allahabad': 6, 'Alwar': 7, 'Ambala': 8, 'Amravati': 9, 'Amritsar': 10, 
'Amroha': 11, 'Anand': 12, 'Anantapur': 13, 'Angul': 14, 'Arrah': 15, 'Asansol': 16, 
'Aurangabad': 17, 'Baddi': 18, 'Bahadurgarh': 19, 'Balasore': 20, 'Bangalore': 21, 
'Bankura': 22, 'Banswara': 23, 'Barabanki': 24, 'Bardhaman': 25, 'Bareilly': 26, 
'Beed': 27, 'Belgaum': 28, 'Berhampur': 29, 'Betul': 30, 'Bhadrak': 31, 'Bhagalpur': 32,
 'Bhandara': 33, 'Bharatpur': 34, 'Bharuch': 35, 'Bhavnagar': 36, 'Bhilai': 37, 'Bhimavaram': 38,
  'Bhiwadi': 39, 'Bhiwani': 40, 'Bhopal': 41, 'Bhubaneswar': 42, 'Bhuj': 43, 'Bikaner': 44,
   'Bilaspur': 45, 'Bokaro': 46, 'Chandigarh': 47, 'Chandrapur': 48, 'Chennai': 49, 'Chhindwara': 50,
    'Chittoor': 51, 'Coimbatore': 52, 'Cuddalore': 53, 'Cuttack': 54, 'Dahod': 55, 'Dalhousie': 56, 
    'Darbhanga': 57, 'Darjeeling': 58, 'Dehradun': 59, 'Deoghar': 60, 'Dhanbad': 61, 'Dharuhera': 62, 
    'Dharwad': 63, 'Dhule': 64, 'Dibrugarh': 65, 'Durg': 66, 'Durgapur': 67, 'Eluru': 68, 'Ernakulam': 69,
     'Erode': 70, 'Faizabad': 71, 'Faridabad': 72, 'Gadarwara': 73, 'Gadhinglaj': 74, 'Gandhidham': 75, 
     'Gandhinagar': 76, 'Gaya': 77, 'Ghaziabad': 78, 'Goa': 79, 'Godhra': 80, 'Gondia': 81, 'Gulbarga': 82,
      'Guntur': 83, 'Gurdaspur': 84, 'Gurgaon': 85, 'Guwahati': 86, 'Gwalior': 87, 'Hajipur': 88, 
      'Haldia': 89, 'Haldwani': 90, 'Hapur': 91, 'Harda': 92, 'Haridwar': 93, 'Hassan': 94, 'Hathras': 95,
       'Hazaribagh': 96, 'Hoshangabad': 97, 'Hoshiarpur': 98, 'Hosur': 99, 'Hubli': 100, 'Idukki': 101, 
       'Indore': 102, 'Jabalpur': 103, 'Jagdalpur': 104, 'Jaipur': 105, 'Jajpur': 106, 'Jalandhar': 107,
        'Jalgaon': 108, 'Jalna': 109, 'Jammu': 110, 'Jamnagar': 111, 'Jamshedpur': 112, 'Jhansi': 113, 
        'Jharsuguda': 114, 'Jhunjhunu': 115, 'Jind': 116, 'Jodhpur': 117, 'Junagadh': 118, 'Kadapa': 119, 
        'Kadi': 120, 'Kakinada': 121, 'Kanchipuram': 122, 'Kangra': 123, 'Kannur': 124, 'Kanpur': 125,
         'Karad': 126, 'Karaikudi': 127, 'Karjat': 128, 'Karnal': 129, 'Karwar': 130, 'Kharagpur': 131,
          'Kochi': 132, 'Kolhapur': 133, 'Kolkata': 134, 'Kollam': 135, 'Korba': 136, 'Kota': 137, 
          'Kotdwara': 138, 'Kottayam': 139, 'Kurnool': 140, 'Kurukshetra': 141, 'Lalitpur': 142, 
          'Latur': 143, 'Lucknow': 144, 'Ludhiana': 145, 'Machilipatnam': 146, 'Madurai': 147,
           'Maharashtra': 148, 'Malappuram': 149, 'Mangalore': 150, 'Margao': 151, 'Mathura': 152, 
           'Meerut': 153, 'Midnapore': 154, 'Mohali': 155, 'Moradabad': 156, 'Morbi': 157, 'Mumbai': 158,
            'Muzaffarpur': 159, 'Mysore': 160, 'Nadiad': 161, 'Nagaon': 162, 'Nagapattinam': 163, 
            'Nagaur': 164, 'Nagpur': 165, 'Nainital': 166, 'Nanded': 167, 'Navsari': 168, 'Neemrana': 169, 
            'Nellore': 170, 'Nizamabad': 171, 'Noida': 172, 'Ongole': 173, 'Ooty': 174, 'Osmanabad': 175,
             'Ottapalam': 176, 'Palakkad': 177, 'Palanpur': 178, 'Palghar': 179, 'Pali': 180, 'Palwal': 181,
              'Panaji': 182, 'Panchkula': 183, 'Panipat': 184, 'Pathanamthitta': 185, 'Patiala': 186, 
              'Patna': 187, 'Phagwara': 188, 'Pondicherry': 189, 'Porbandar': 190, 'Pudukkottai': 191,
               'Pune': 192, 'Puri': 193, 'Raichur': 194, 'Raigad': 195, 'Raigarh': 196, 'Raipur': 197, 
               'Raisen': 198, 'Rajkot': 199, 'Rajnandgaon': 200, 'Rajpura': 201, 'Ranchi': 202, 
               'Ratnagiri': 203, 'Rayagada': 204, 'Rewa': 205, 'Rewari': 206, 'Rishikesh': 207, 
               'Rohtak': 208, 'Roorkee': 209, 'Rourkela': 210, 'Rudrapur': 211, 'Sabarkantha': 212, 
               'Sagar': 213, 'Salem': 214, 'Sambalpur': 215, 'Satna': 216, 'Secunderabad': 217, 'Shimla': 218,
                'Shirdi': 219, 'Siddipet': 220, 'Sikar': 221, 'Silchar': 222, 'Siliguri': 223, 
                'Sindhudurg': 224, 'Siwan': 225, 'Solan': 226, 'Solapur': 227, 'Sonipat': 228, 
                'Srikakulam': 229, 'Srinagar': 230, 'Surat': 231, 'Surendranagar': 232, 'Tenali': 233, 
                'Thanjavur': 234, 'Thoothukudi': 235, 'Thrissur': 236, 'Tirunelveli': 237, 'Tirupati': 238,
                 'Udaipur': 239, 'Udupi': 240, 'Ujjain': 241, 'Vadodara': 242, 'Valsad': 243, 'Vapi': 244, 
                 'Varanasi': 245, 'Vellore': 246, 'Vidisha': 247, 'Vijayawada': 248, 'Visakhapatnam': 249, 
                 'Visnagar': 250, 'Vizianagaram': 251, 'Warangal': 252, 'Wardha': 253, 'Washim': 254, 
                 'Yavatmal': 255}
@app.route('/api',methods=['POST'])
@cross_origin()
def predict():
    data = request.get_json(force=True)
    val= [data["UNDER_CONSTRUCTION"],data["BHK_NO."],data["SQUARE_FT"],warehouse[data["City"]]]
    val = [val]
    prediction = model.predict(pd.DataFrame(val,columns=['UNDER_CONSTRUCTION','BHK_NO.','SQUARE_FT','City']))
    print(prediction)
    output = prediction[0][0]
    if str(output) < '0':
        output='233'

    # output='hello'
    return jsonify(output)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
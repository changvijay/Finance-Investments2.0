
from bs4 import BeautifulSoup
from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app) 

@app.route('/')
def info():
  datas = []
  url = "https://timesofindia.indiatimes.com/business/stock-market/quarterly-results"
  html_content = requests.get(url).text

  soup = BeautifulSoup(html_content, 'html.parser')

  # Find all ul elements with class "list5 clearfix"
  ul_elements = soup.find_all('ul', class_='list5 clearfix')

  # Iterate over each ul element
  for ul_element in ul_elements:
      # Find all span elements with class "w_tle" within the current ul
      span_elements = ul_element.find_all('span', class_='w_tle')

      # Iterate over each span within the current ul
      for span_element in span_elements:
          # Find the a tag within the span
          a_tag = span_element.find('a')

          # Check if the a tag is found
          if a_tag:
              # Extract link and data
              link = a_tag.get('href', '')
              data = a_tag.get_text()
              datas.append([link,data])
          else:
              print("No 'a' tag found within the span.")
  return jsonify(datas)

@app.route('/top')

def top_news():
    top_datas = []
    url = "https://timesofindia.indiatimes.com/business/stock-market/quarterly-results"
    html_content = requests.get(url).text

    soup = BeautifulSoup(html_content, 'html.parser')

    ul_ele = soup.find_all('ul', class_='top-newslist clearfix')
    for ul in ul_ele:
        il_ele = ul.find_all('span', class_='w_tle')

        for span in il_ele:
            a_tag = span.find('a')

            if a_tag:
                link = a_tag.get('href', '')
                data = a_tag.get_text()
                top_datas.append([link,data])
    return jsonify(top_datas)


if __name__ == '__main__':
    app.run(debug=True, port='5000')
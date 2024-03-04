from flask import Flask, request, jsonify
from flask_cors import CORS
import llm_service

app = Flask(__name__)
CORS(app)

@app.route('/summary', methods=['POST'])
def text_summerizer():
    data = request.json
    sel_text = data.get('text')

    if len(sel_text) > 10:
        summary = llm_service.generate_text(sel_text)
    else:
        return jsonify({'summary': "Please select long text"})
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)

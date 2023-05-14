import streamlit as st
import pandas as pd
import numpy as np
import joblib
import pandas as pd
import tensorflow as tf
from transformers import BertTokenizer, TFBertModel
from sklearn.decomposition import PCA

# Define the Streamlit app
def app():
    st.title('Valuation Prediction For Startups')
    st.subheader('Made using shark tank dataset and taiwan bankruptcy in order to get valuation validation')

    # Define the input fields
    input = {
        'idea': st.text_input('Start-up Description'),
        'ask_valuation': st.number_input('Said Valuation'),
    }
     
    inputs ={
        'Equity_shared_between_partners': st.number_input('Equity shared between partners'),
        'gross_profit_to_sales' : st.number_input('Gross Profit to Sales', value=0.0),
        'net_income_to_total_assets' : st.number_input('Net Income to Total Assets', value=0.0),
        'operating_gross_margin' : st.number_input('Operating Gross Margin', value=0.0),
        'operating_profit_rate' : st.number_input('Operating Profit Rate', value=0.0),
        'operating_expense_rate ': st.number_input('Operating Expense Rate', value=0.0),
        'cash_flow_rate': st.number_input('Cash flow rate', value=0.0),
        'net_profit_growth_rate' : st.number_input('Continuous Net Profit Growth Rate', value=0.0),
        'total_asset_growth_rate': st.number_input('Total Asset Growth Rate', value=0.0),
        'net_value_growth_rate': st.number_input('Net Value Growth Rate', value=0.0),
        'cash_reinvestment': st.number_input('Cash Reinvestment %', value=0.0),
        'roa' : st.number_input('ROA(A) before interest and % after tax', value=0.0)
    }
    
    # Convert the input values to a pandas DataFrame
    input_df = pd.DataFrame(['idea','pitcher_ask_amount','ask_valuation'])

    # Make the prediction
    # prediction = model.predict(input_df)[0]

    # Display the prediction
    # st.write(f'Predicted valuation: {prediction:.2f}')
    # load the pre-trained BERT model and tokenizer
    model_name = 'bert-base-uncased'
    tokenizer = BertTokenizer.from_pretrained(model_name)
    model = TFBertModel.from_pretrained(model_name)

    # define a function to encode a single text string using BERT
    def encode_text(text):
        # tokenize the text and convert to input features
        input_ids = tokenizer.encode_plus(
            text, 
            add_special_tokens=True,
            return_attention_mask=True,
            return_token_type_ids=False,
            padding='max_length',
            truncation=True,
            max_length=128
        )['input_ids']
        
        # convert to a tensor and get the output features from the BERT model
        input_ids = tf.convert_to_tensor([input_ids])
        outputs = model(input_ids)
        features = outputs.last_hidden_state.numpy()[0][0] # get the final hidden state of the [CLS] token
        
        return features
    
    text_input = input['idea']
    features = encode_text(text_input)
# Run the Streamlit app
if __name__ == '__main__':
    app()

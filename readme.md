# MuzTrade
An AI-driven stock market prediction tool based on the sentiment of the Spotify daily top songs and trained over the new powerful AWS DL1 Habana instance.

## Dataset description:

1. daily-chart-data-after-july.csv - (artist, track name, streams, date)<br>
   Daily Top 200 songs according to Spotify charts for US region scraped from Spotify’s website
2. djia-2017-2021-data.csv - (Date, Open, High, Low, Close, Adj Close, Volume, label)<br>
   DJIA index values for the dates for which song data is available
3. final-merged-data-50.csv - (song_id, lyrics, streams, date, label)<br>
   The final dataset that is used as input for training the model
4. spotifytopsongsdata.csv - (Position, Track Name, Artist, Streams, Date, Genre)<br>
   Daily Top 200 songs according to Spotify charts for US region downloaded from Kaggle
5. spotifytopsongswithlyricsdata.csv - (Track Name, Artist, lyrics)<br>
   Dataset that stores lyrics for a combination of track name and its artist


## Python files:

1. GetDJIADataYfinance.ipynb<br>
The DJIA index data is fetched from YahooFinancials for the dates in our songs dataset. The label column has two values namely 1 and -1. Label is 1 when the DJIA index value for the current day is greater than that for the previous day. Label is -1 when the DJIA index value for the current day is smaller than that for the previous day. 
<br><br>
2. ScrapeLyricsFromGenius.ipynb<br>
From the available top songs data, duplicate pairs of track name and artist are removed to obtain unique combinations for which lyrics will be fetched. The track name and artist name is cleaned to get rid of any non-alphabet characters or non-English alphabets. Then lyrics for each unique combination of track name and artists are scraped from Genius - https://genius.com/.
This dataset can be imagined like a map where (track name, artist) is the key and (lyrics) is the value.
<br><br>
3. ScrapeSpotifyChartsData.ipynb<br>
The daily top 200 songs data from January 2017 till July 2021 was available from Kaggle. So, to get data from August 2021 till February 2022, we scraped data from the Spotify website for the country US https://spotifycharts.com/regional/us.
<br><br>
4. TrainingBertModelUncased_DL.ipynb<br>
This is where the model training takes place. The training or fine-tuning of the model is done on top of the BERT base uncased model from the transformer’s library of hugging face. <br>
First, lyrics are tokenized using the BertTokenizer and the goal is to find an optimal value of maximum length of lyrics. Then the parameters for the training model are set and the data is split for each day (remember each day has 50 top songs) into train and test data.<br>
Many song lyrics had repeated sentences, and so the lyrics are preprocessed to remove these duplicate sentences. Then LyricsSentimentClassifier model is trained on pre-trained BERT model; average pooling for each day’s 50 songs is done by relative weighting on the basis of number of streams and the classifier with feed-forward neural network and softmax function classifies the sentiment of lyrics to map classes namely bullish and bearish.<br>

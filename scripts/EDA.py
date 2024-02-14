import pandas as pd
import json
import matplotlib.pyplot as plt
import seaborn as sns

# Load the blockchain data
with open('blockchainData.json') as file:
    data = json.load(file)

# Convert the data into a DataFrame
blockchain_df = pd.DataFrame(data)

# Display the first few rows of the dataframe and its basic information
print(blockchain_df.head())
print(blockchain_df.info())

# Convert 'number' and 'timestamp' columns to numeric
blockchain_df['number'] = pd.to_numeric(blockchain_df['number'])
blockchain_df['timestamp'] = pd.to_numeric(blockchain_df['timestamp'])

# Convert 'timestamp' to a datetime format
blockchain_df['datetime'] = pd.to_datetime(blockchain_df['timestamp'], unit='s')

# Plotting transactions over time
plt.figure(figsize=(10, 6))
sns.lineplot(x='datetime', y='transactions', data=blockchain_df)
plt.title('Transactions Over Time')
plt.xlabel('Date')
plt.ylabel('Number of Transactions')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('transactions_over_time.png')
plt.show()


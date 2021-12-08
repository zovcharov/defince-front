import React from 'react';
import { useParams } from 'react-router-dom';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

enum SignalrEvents {
  tokenInfo = 'tokenInfo',
  transactionInfo = 'transactionInfo',
}
export type TokenNotification= {
  token:string;
  date: Date;
  priceInBnb: number;
  priceInUsdt: number | null;
  volumeInUsdt: number | null;
  dayVolumeChange: number | null;
  supply: number;
  marketCap: number;
  liquidityInBnb: number;
  liquidityInUsdt: number;
  dayPriceChange: number;
};

export type TransactionNotification= {
  token:string;
  date: Date;
  side: number;
  totalCoins: number;
  totalBnb: number;
  transactionDate: Date;
  id: string;
  usdtPrice: number;
  bnbPrice: number;
  totalUsdt: number;
};

const TokenChartPage = (): JSX.Element => {
  const { address } = useParams();

  const start = async (hubConnection: HubConnection) => {
    await hubConnection.stop();
    await hubConnection.start();
    console.log('SignalR Connected.');
  };

  const handleEvents = (hubConnection: HubConnection) => {
    hubConnection?.on(SignalrEvents.tokenInfo, (event: TokenNotification) => {
      console.log(event)
    });

    hubConnection?.on(SignalrEvents.transactionInfo, (event: TransactionNotification) => {
      console.log(event)
    });
  }

  const hubConnection = new HubConnectionBuilder()
    .withUrl(`http://84.252.138.11:5101/token-notification-hub?token=${address}`)
    .build();

  hubConnection.onclose(() => {
    //if (!this.shouldDisconnect) this.unexpectedDisconnectSub.next();
  });

  handleEvents(hubConnection);
  start(hubConnection);

  return (
    <div>TokenChartPage</div>
  )
}

export default TokenChartPage;
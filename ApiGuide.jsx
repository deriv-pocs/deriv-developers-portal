import styles from './ApiGuide.module.scss';
import howAPIWorksUrl from './img/how-api-works.png';
import Navigator from './components/Navigator/Navigator';
import { useSelector } from '@xstate/react';
import { isMobileSelector } from './selectors';
import { stateService } from './stateSignal';

export default function ApiGuide() {
  const isMobile = useSelector(stateService, isMobileSelector);
  return (
    <div className={styles.apiGuide}>
      {!isMobile && <Navigator />}
      <div className={styles.apiGuideContent}>
        <h1>API Guide</h1>
        {isMobile && <Navigator />}
        <div className={styles.textBlock}>
          <h2>What is API?</h2>
          <p>
            API stands for Application Programming Interface - a software that allows 2 or more computer programs to communicate with each other. These 2 programs are usually referred to as server and client.
          </p>
          <ul>
            <li>
              <strong>Server</strong>
              <p>
                A server contains information required by a client, can grant access to this information, and performs actions with it.
              </p>
              <p> The server defines how it should be spoken to, what actions it will perform, what information it will give, and its format. </p>
              <p> All these details are usually determined in an API specification. For example, here is the <a href="https://developer.twitter.com/en/docs/twitter-api">API specification for Twitter</a>.</p>
            </li>
            <li>
              <strong>Client</strong>
              <p> A client is a software program that talks to the server to either obtain information or ask the server to perform certain actions. </p>
              <p> Clients can be written in any programming language as long as that language can implement the communication standards specified by the server. </p>
              <p> The communication between a server and a client happens with the help of API requests, also known as API calls. The API calls are sent from a client to a server and back. The client and server can be written in different programming languages. </p>
            </li>
          </ul>
          <p>Here is a representation of how an API works:</p>
          <div className={styles.apiGuideImage}><img src={howAPIWorksUrl} alt="How API works" loading="lazy" /></div>
          <h3>Client libraries</h3>
          <p> Client libraries are pre-written pieces of code that can be used to send API calls instead of writing codes from scratch. </p>
          <p> Using a client library is optional but highly recommended, as it makes it much easier and efficient to start working with the API. </p>
          <p> For example, configuring the correct protocol to talk to the server may require several steps without the client library, but using a ready-made code can shorten the process to just one step. </p>
          <p> A client library also makes it easier to adapt to API updates. In many cases, if the API has a significant update, the client library is updated too. The developer of the client that uses API won’t need to make any changes to their code and will just need to update the version of the client library. </p>
        </div>
        <div className={styles.textBlock}>
          <h2>The Deriv API</h2>
          <h3>What can you do with the Deriv API?</h3>
          <p>The Deriv API allows you to perform nearly all functions of the Deriv platforms, since they
            share the same API.
            For our CFD platforms (Deriv MT5 and Deriv X), the API functionality is only available for some account management
            actions.</p>
          <p>Our API users typically perform the following activities:</p>
          <ul>
            <li>
              <p>Build websites similar to Deriv but with different features.</p>
            </li>
            <li>
              <p>Create desktop apps to execute trades for themselves and their clients.</p>
            </li>
            <li>
              <p>Explore historical tick information.</p>
            </li>
            <li>
              <p>Automate services as payment agents.</p>
            </li>
          </ul>
          <h3>How can you earn with Deriv API?</h3>
          <ul>
            <li>
              <p>You can earn commission on trades and payments your clients perform via the
                websites and apps you
                create with Deriv API. Get more details about the commission plans <a href="https://deriv.com/partners/affiliate-ib/" target="_blank">here</a>. </p>
            </li>
            <li>
              <p>You can also earn from markups on every contract purchased via a trading app you created
                with Deriv API. The
                markup is defined by you and can be up to 5%.</p>
            </li>
          </ul>
          <p>Here is an example of how the markup is calculated:</p>
          <ul className={styles.markupCalc}>
            <p>To get a payout of <b>2 USD:</b></p>
            <li>Client stake without markup = <b>1.07 USD</b></li>
            <p>With the markup (e.g. 2%), a client pays:</p>
            <li>Client's stake with the markup = Stake + (payout x markup)</li>
            <li>Client's stake with the markup = 1.07 USD (2 USD x 2%) = <b>1.11 USD</b></li>
          </ul>
          <h3>Conditions of using the Deriv API</h3>
          <p>The Deriv API is free of charge and is subject to our <a href="https://deriv.com/terms-and-conditions">terms
            and conditions</a> and <a href="https://deriv.com/tnc/business-partners-general-terms.pdf">copyright</a>.</p>
          <p>Should you run into any difficulties using it or if you need assistance, please contact us via one of our
            support forums or via <a href="mailto:api-support@deriv.com">email</a>.</p>
        </div>
        <div className={styles.textBlock}>
          <h2 id="technical-specifications-of-the-deriv-api">Technical specifications of the Deriv API</h2>
          <p>It is only possible to communicate with the Deriv API using WebSockets; it does not support other protocols. Any
            data passed to the Deriv API should be in JSON format, while the comprehensive all-in-one client library is
            available in JavaScript and Python.</p>
          <h3 id="websockets">WebSockets</h3>
          <p>The WebSockets protocol is an advanced version of the communication channel that is available in all popular
            programming languages. It allows the server to send information to the client and maintain the connection without
            the client requesting it every time.</p>
          <p>In comparison, APIs using REST over HTTP don’t maintain a connection to the client once the server has replied to
            it.</p>
          <p>The WebSockets protocol provides clients with a faster and more efficient way to receive updated information as
            soon as it becomes available. For example, you can subscribe to account balance updates and the Deriv servers will
            send the new balance to your client in real time.</p>
          <p>A client can also subscribe and receive several types of different information simultaneously over a single
            connection.</p>
          <p>For more information on how to write a client using WebSockets, visit this <a href="/docs/">guide</a>.</p>
          <h3 id="json">JSON</h3>
          <p>JavaScript Object Notation (JSON) is a data format based on JavaScript. However, it is completely
            language-independent, and can be used by any modern programming language. JSON has a good balance between being
            readable by humans and by machines, making it both user-friendly and computer-efficient.</p>
          <p>Here is an example of the JSON formatted code, where “ticks” is the name of the attribute and “R_100” is the
            value of that attribute.</p>
        </div>
      </div>
    </div>
  )
}

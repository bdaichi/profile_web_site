type Props = {
  isDarkMode: boolean;
};

export default function PGCareerField(props: Props) {
  return (
    <div
      className="flex flex-col items-center"
      style={{ backgroundColor: props.isDarkMode ? "black" : "white" }}
    >
      <a
        className="flex justify-center text-lg my-8 border-b"
        style={{ color: "#01a9f4", borderColor: "#01a9f4" }}
        href="https://github.com/bdaichi"
      >
        githubアカウント
      </a>
      <p
        className="flex justify-center text-lg py-4"
        style={{ color: props.isDarkMode ? "#01a9f4" : "black" }}
      >
        プログラミングを始めたきっかけ
      </p>
      <p
        className="flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md"
        style={{
          color: props.isDarkMode ? "white" : "black",
          borderColor: props.isDarkMode ? "#01a9f4" : "black",
        }}
      >
        中学生の時にパソコンができる人に憧れを抱いていて、かっこいいなと思っていました。
        高校でWord、Excelを学びプログラミングにも興味が出てきたのですが、プログラミングの授業はなく
        教えられる先生もいなかったので、独学でプログラミングの学習をはじめました。
      </p>
      <p
        className="flex justify-center text-lg mt-8 py-4"
        style={{ color: props.isDarkMode ? "#01a9f4" : "black" }}
      >
        プログラミングをやってみて
      </p>
      <p
        className="flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md"
        style={{
          color: props.isDarkMode ? "white" : "black",
          borderColor: props.isDarkMode ? "#01a9f4" : "black",
        }}
      >
        「大変だったな〜」の一言につきます(笑)。
        専門学生になってアプリ開発を始めたのですが、
        環境構築、APIなど、当然わからないことだらけで、最初の頃はエラー解決するのに１〜２週間くらいかかっていて作業がなかなか前に進まなかったです。
        ５ヶ月くらいたつとエラーとの格闘も長くて3日ですんだり、APIも使えるようになりました！
        大変なこともありましたが、日々自分の成長を実感できて楽しかったです！
        過去の自分は難しいからといって諦めることが多かったのですが、
        アプリ開発を通して努力の大切さを知り、今までの自分を恥ずかしく思うようになりました。
        どうせ自分はできないという考えは捨てて、自分で自分の可能性を信じて生きていきたいです。
      </p>
      <p
        className="flex justify-center text-lg mt-8 py-4"
        style={{ color: props.isDarkMode ? "#01a9f4" : "black" }}
      >
        プログラミングに対する気持ち
      </p>
      <p
        className="flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md"
        style={{
          color: props.isDarkMode ? "white" : "black",
          borderColor: props.isDarkMode ? "#01a9f4" : "black",
        }}
      >
        プログラミングを始めたばかりの頃はわからないことだらけで難しいという印象でした。
        途中で何度も挫折したんですが、どうしてもプログラミングができるようになって、
        プログラミングを好きになりたい、エンジニアとして将来働きたい、
        という思いが強かったので、諦めず続けました。
        今ではプログラミングが好きだと思えることが多くなってきました。
        これからもがんばります！！！
      </p>
    </div>
  );
}

## process

# 各種ライブラリのインストール

# 設計の検討

<App>
  <Header>
    <HeaderTitle />
    <HeaderItem />
    <HeaderItem />
    <HeaderAc />
  </Header>
  <Body>  
    <Issue>
      <ContentChange>
      <IssueMain>
        <IssueFunction>
          <Search />
          <Newbutton />
          <Deletebutton />
        </IssueFunction>
        <IssueContent/>
      </IssueMain>
    </Issue>
    <PullRequest />
    <Profile />
  </Body>
</App>

# state の定義

#　 route の定義

/  
/issue  
/pull-request
/profile

modal はどうするのか。

# コンポーネントの作成

# コンポーネント間の調整

# 動作確認

store:
issue={
title: "a bug in top page",
status: "open or close",
author: "jun",
created: "2020-5-2",
updated: "2020-5-3"
}

state
dispacth

reducer
action={
add: issue add,
delete: issue delete,
put: issue put,
find: issue find
}

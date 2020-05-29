## アプリの概要

- redux-github-viewer
- demo: https://junwatanabe72.github.io/redux-github-viewer/
- 経緯:redux を用いた react アプリケーション学習のため、課題として作成。

## 使用した技術

- React
- redux,react-redux
- react-router
- react-modal
- eslint+prettier
- styled-components

## 起動方法

```
git clone ~~~
cd redux-github-viewer
yarn install
yarn start
```

## 設計

```
・ actions => actioncreater,actionを定義する。
・ components => 各種コンポーネントを定義する。
・ reducers =>issue,profile,modalのreducerを定義し、combinereducerも定義する。
・ Container =>reducerとcomponentsをconnectする。
・ setting =>atomicデザインを元に各種コンポーネントを配置しています。
```

```
# JSXtree
<app>
  <Router>
      <Header { useState }>
        <HeaderTitle /> => <LinkButton />
        <HeaderLink /> => <LinkButton />
        <HeaderMenu {useRef, useEffect }/> => <ComponentFontAwesomeIcon /> , <HeaderModal />
      </Header>
      <Body>
        <TopRoute>
          <Top { useState }>
            <ContentChange/>
            <Issue /> or<PullRequest />
          </Top>
        </TopRoute>
        <IssueRoute>
          <Issue {useState}>
            <IssueFunction>
              <Logo />
              <Input/>
              <IssueButtons> => <Button />
            </IssueFunction>
            <IssueMain>
              <IssueTable>
                <TableHead> => <TableHeadCheckBoxCell /> , <TableHeadCell />
                <TableBody>
                  <TableData> => <TableDataCheckBoxCell {useState} /> , <TableDataCell />
                </TableBody>
              </IssueTable>
            </IssueMain>
          </Issue>
        </IssueRoute>
        <ProfileRoute>
          <Profile>
            <Logo/>
            <Profilemain>
              <ProfileData/> => <Image />
              <ProfileDataB/>
            </Profilemain>
          </Profile>
        </ProfileRoute>
        <PullRequestRoute>
          <PullRequest> => <Logo />
        </PullRequestRoute>
      </Body>
      <ModalWindow>
        <ModalMain {useState}/> =>  <Logo />,<Button />,<Input />,<textArea />
        <ModalUpdate {useState}> =>  <Logo />,<Button />,<Input />,<textArea />
      </ModalWindow>
  </Router>
</app>
```

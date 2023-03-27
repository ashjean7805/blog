---
sidebar_position: 1
---
# Snippet
## 1. 스니펫이란?

Snippet : 프로그래밍 분야에서는 코드 조각, 재사용 가능한 소스코드를 일반적으로 일컫습니다.
어원은 Snip으로 가위로 "싹둑" 자르는 소리 혹은, 가위로 자르다 라는 뜻의 동사이며, 여기에 접미사를 붙여 명사화 시킨 단어입니다. 영어사전으로 정확히 단어를 찾아보면 정보, 한 토막의 의미도 있는 것을 확인하실 수 있습니다. 토막난 코드 정도의 의미로 코드 조각을 부르는데 채용된 단어이지 않을까 싶습니다.

보통 프로그래밍 환경에서는 코드 조각이라 하면 보통 사용하는 단축키와 같이 특정 문자를 입력하면 그에 해당하는 코드를 자동으로 작성을 하는 용도로 활용을 합니다.
일종의 코드 템플릿을 작성해두고 활용하는 것과 같고, 더 간단히 말하자면 코드에 자동완성을 도입하는 것입니다.

## 2. VS Code Snippet
다양한 코딩 환경이 스니펫을 지원하지만 현재 이 블로그 글을 작성하는 툴인 **VS Code**을 대상으로 설명합니다.

### 2.1 Built-in snippets

**VS Code**는 자바스크립트나 마크다운 등 여러 언어를 위한 내장 스니펫을 사전에 구비하고 있습니다. 게다가 특유의 많은 **Extension**을 다운로드 받아 사용한다면 미리 정의된 코드 스니펫을 사용할 수 있습니다.

### 2.2 Custome snippets

- 1. 파일(File)
- 2. 기본설정(Preferences)
- 3. 사용자 코드 조각(Configure User Snippets)
    - 1. 새 전역 코드 조각 파일(New Global Snippets file)...
        - 프로젝트와 무관하게 설정된 코드 스니펫을 사용할 수 있음
    - 2. '폴더명'에 대한 새 코드 조각 파일(New Snippets file for 'Folder Name')...
        - 해당 폴더를 편집할 때만 설정된 코드 스니펫을 사용할 수 있음.

```json
	"snippet_name": {
		"scope": "markdown",
		"prefix": "doc",
		"body": [
            "---"
            "sidebar_position: $1{}"
            "---"
		],
		"description": "docusaurus document preset"
```
예시로 든 코드 스니펫으로 도큐사우루스의 도큐먼트 항목에서 관리되는 기본적인 configuration인 sidebar_position 만을 작성하였음. 

- snippet_name
    - 스니펫 이름
    - description이 설정되어 있지 않으면 intellisense에 대신 디스플레이
- scope
    - 범위
    - 해당하는 언어를 사용할 때만 스니펫이 작동하도록 통제
    - 여러 언어 설정 가능
- prefix
    - 정의된 prefix를 타이핑함으로 코드 스니펫을 호출
- body
    - 사전 정의된 코드 내용
- description
    - 스니펫 설명
    - intellisense에 내용이 디스플레이

#### 2.2.1 Snippet Syntax

**VS Code**에는 스니펫 문법이 잘 설명되어 있으며 아래에는 유용해 보이는 스니펫 문법 두가지를 소개합니다.

이 외에도 자세한 것은 아래 참조 부분의 공식사이트에서 **Snippets** 부분에서 **Snippet syntax**를 참조하시면 됩니다.

- Tabstops
    - 스니펫 안에서 커서 위치를 지정하기 위함
    - 숫자 순서대로 tabstop이 방문하게 됨
    - `$0` 은 최초가 아닌 최종 커서 위치를 지정
- TM_FILENAME_Base
    - 현재 파일 명을 확장자를 제외하고 가져다줌


### References
자세한 것은 **VS Code** 공식 사이트에 잘 설명되어 있습니다.
- [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
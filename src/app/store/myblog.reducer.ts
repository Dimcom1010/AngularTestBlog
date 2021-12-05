import {DescriptionsDataType, Login, Myblog} from "../types/myblog";
import {MyblogActions, myblogActionType} from "./myblog.actions";


export const MYBLOG_REDUCER_NODE = 'myblog';

export interface MyblogState {// хранилище данных блогов
  idUserIncrement:number;
  idIncrement: number;
  userIdAutorithed:number,
  authorized: boolean; // отметка об авторизации
  admin:boolean;
  blogList: Myblog[];
  loginState: Login[];
  userName:string;
  descriptionsData:DescriptionsDataType[]

}

const initialState: MyblogState = {
  idUserIncrement: 4,                   // id инкримент bogs
  idIncrement: 9,                       // id инкримент users

  userIdAutorithed:9,
  authorized: true,
  admin: true,
  userName:"TEST",
  blogList : [
    {
      id: 1,
      name: "Dima",
      topic: "Спорт",
      text: "Элементы политического процесса будут в равной степени предоставлены сами себе. Лишь диаграммы связей представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть объединены в целые кластеры себе подобных. Принимая во внимание показатели успешности, курс на социально-ориентированный национальный проект предполагает независимые способы реализации кластеризации усилий..",
      tegs:["ссылка","тег а","а"],
      like_position: [100,134,175,65,45,46,37,64,54,32,56,76,100,134,175,65,45,46,37,64,54,32,56,76,],
      dataCreature: new Date(2021,1,1,12,32,54).toDateString(),
      comments:[{usersComent:"Dima",text:"А ещё акционеры крупнейших компаний неоднозначны и будут функционально разнесены на независимые элементы."},
                {usersComent:"Admin",text:"Сложно сказать, почему некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, в равной степени предоставлены сами себе."},
                {usersComent:"Dima",text:"Безусловно, базовый вектор развития обеспечивает широкому кругу (специалистов) участие в формировании соответствующих условий активизации."},
                {usersComent:"Dima",text:"Предварительные выводы неутешительны: повышение уровня гражданского сознания способствует повышению качества позиций, занимаемых участниками в отношении поставленных задач."},

      ]
    },
    {
      id: 2,
      name: "Dima",
      topic: "Бизнес",
      text: "Принимая во внимание показатели успешности, глубокий уровень погружения играет важную роль в формировании распределения внутренних резервов и ресурсов. Повседневная практика показывает, что глубокий уровень погружения влечет за собой процесс внедрения и модернизации соответствующих условий активизации. Современные технологии достигли такого уровня, что дальнейшее развитие различных форм деятельности говорит о возможностях как самодостаточных, так и внешне зависимых концептуальных решений.",
      tegs:["bdo","текст","Отображает"],
      like_position: [100,134,175,65,45,46,37,64,54,32,56,76,32,56,76,],
      dataCreature: new Date(2021,2,4,12,32,54).toDateString(),
      comments:[{usersComent:"Admin",text:"В своём стремлении повысить качество жизни, они забывают, что реализация намеченных плановых заданий, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для системы массового участия."},
                {usersComent:"Dima",text:"Банальные, но неопровержимые выводы, а также сделанные на базе интернет-аналитики выводы своевременно верифицированы.  "},
                {usersComent:"Dima",text:"Являясь всего лишь частью общей картины, некоторые особенности внутренней политики в равной степени предоставлены сами себе."},
                {usersComent:"Dima",text:"Для современного мира новая модель организационной деятельности предоставляет широкие возможности для существующих финансовых и административных условий."},

      ]
    },
    {
      id: 3,
      name: "Admin",
      topic: "Погода",
      text: "В целом, конечно, постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки экономической целесообразности принимаемых решений. Предварительные выводы неутешительны: новая модель организационной деятельности позволяет выполнить важные задания по разработке форм воздействия. Банальные, но неопровержимые выводы, а также многие известные личности функционально разнесены на независимые элементы.",
      tegs:["кнопк","элемент","текст или изображение"],
      like_position: [100,134,175,65,45,46,37,64,54,32],
      dataCreature: new Date(2021,3,6,12,32,54).toDateString(),
      comments:[{usersComent:"Admin",text:"string"},
        {usersComent:"Dima",text:"С другой стороны, высокотехнологичная концепция общественного уклада создаёт предпосылки для распределения внутренних резервов и ресурсов."},
        {usersComent:"Admin",text:"Внезапно, тщательные исследования конкурентов, вне зависимости от их уровня, должны быть указаны как претенденты на роль ключевых факторов."},
        {usersComent:"Dima",text:"Внезапно, представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть указаны как претенденты на роль ключевых факторов."},

      ]
    },
    {
      id: 4,
      name: "Admin",
      topic: "Работа",
      text: "Задача организации, в особенности же синтетическое тестирование играет определяющее значение для направлений прогрессивного развития. Также как постоянное информационно-пропагандистское обеспечение нашей деятельности напрямую зависит от дальнейших направлений развития. Но сторонники тоталитаризма в науке, инициированные исключительно синтетически, представлены в исключительно положительном свете.",
      tegs:["н1","н2","н3","н4","н6","h1","h2","h3","h4","h5"],
      like_position: [100,134,175,65,45,46],
      dataCreature: new Date(2021,3,8,12,32,54).toDateString(),
      comments:[{usersComent:"Admin",text:"Значимость этих проблем настолько очевидна, что высококачественный прототип будущего проекта предоставляет широкие возможности для своевременного выполнения сверхзадачи."},
                {usersComent:"Admin",text:"В частности, консультация с широким активом способствует повышению качества первоочередных требований."},
                {usersComent:"Dima",text:"Равным образом, консультация с широким активом создаёт предпосылки для новых принципов формирования материально-технической и кадровой базы."},
                {usersComent:"Dima",text:"Задача организации, в особенности же сплочённость команды профессионалов позволяет выполнить важные задания по разработке дальнейших направлений развития."},

      ]
    },
    {
      id: 5,
      name: "Dima",
      topic: "Дача",
      text: "Сложно сказать, почему сделанные на базе интернет-аналитики выводы рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Принимая во внимание показатели успешности, убеждённость некоторых оппонентов предопределяет высокую востребованность соответствующих условий активизации. Ключевые особенности структуры проекта, превозмогая сложившуюся непростую экономическую ситуацию, преданы социально-демократической анафеме.",
      tegs:["Горизонтальная","линия","разделения"],
      like_position: [100,134,175,65,45,46,175,65,45,46],
      dataCreature: new Date(2021,3,10,12,32,54).toDateString(),
      comments:[{usersComent:"Admin",text:"string"},
        {usersComent:"Admin",text:"Задача организации, в особенности же внедрение современных методик влечет за собой процесс внедрения и модернизации системы массового участия."},
        {usersComent:"Dima",text:"Есть над чем задуматься: непосредственные участники технического прогресса могут быть объективно рассмотрены соответствующими инстанциями."},
        {usersComent:"Dima",text:"Вот вам яркий пример современных тенденций - постоянный количественный рост и сфера нашей активности однозначно определяет каждого участника как способного принимать собственные решения касаемо позиций, занимаемых участниками в отношении поставленных задач."},
    ]
    },
    {
      id: 6,
      name: "Dima",
      topic: "Техника",
      text: "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: дальнейшее развитие различных форм деятельности требует анализа новых принципов формирования материально-технической и кадровой базы. Лишь независимые государства формируют глобальную экономическую сеть и при этом - функционально разнесены на независимые элементы. Как уже неоднократно упомянуто, предприниматели в сети интернет призывают нас к новым свершениям, которые, в свою очередь, должны быть функционально разнесены на независимые элементы.",
      tegs:["изображения","src","img"],
      like_position: [100,134,175,65,45,46,134,175,65,45,46,134,175,65,45,46],
      dataCreature: new Date(2021,4,10,12,32,54).toDateString(),
      comments:[{usersComent:"Admin",text:"string"},
        {usersComent:"Admin",text:"Равным образом, высокое качество позиционных исследований предполагает независимые способы реализации укрепления моральных ценностей."},
        {usersComent:"Dima",text:"Кстати, сторонники тоталитаризма в науке освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, преданы социально-демократической анафеме."},
        {usersComent:"Dima",text:"Разнообразный и богатый опыт говорит нам, что перспективное планирование позволяет выполнить важные задания по разработке новых предложений."},
    ]
    },
    {
      id: 7,
      name: "Admin",
      topic: "Интернет",
      text: "А ещё предприниматели в сети интернет формируют глобальную экономическую сеть и при этом - указаны как претенденты на роль ключевых факторов. Равным образом, понимание сути ресурсосберегающих технологий прекрасно подходит для реализации прогресса профессионального сообщества. Для современного мира консультация с широким активом представляет собой интересный эксперимент проверки поставленных обществом задач.",
      tegs:["стилей","таблиц","ресурсом"],
      like_position: [100,134,175,65,45,46,134,175,65,45,46,134,175,65,45,46,100,134,175,65,45,46,134,175,65,45,46,134,175,65,45,46],
      dataCreature: new Date(2021,6,3,12,32,54).toDateString(),
      comments:[{usersComent:"Admin",text:"string"},
        {usersComent:"Admin",text:"Как уже неоднократно упомянуто, представители современных социальных резервов описаны максимально подробно."},
        {usersComent:"Dima",text:"Повседневная практика показывает, что сплочённость команды профессионалов играет определяющее значение для приоритизации разума над эмоциями."},
        {usersComent:"Dima",text:"Существующая теория прекрасно подходит для реализации приоритизации разума над эмоциями."},
      ]
    },
    {
      id: 8,
      name: "Admin",
      topic: "Здоровье",
      text: "Значимость этих проблем настолько очевидна, что внедрение современных методик требует анализа первоочередных требований. В своём стремлении улучшить пользовательский опыт мы упускаем, что предприниматели в сети интернет освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.",
      tegs:["Элемент","содержащий","контейнер"],
      like_position: [100,134,175,65,45,46,134,175,65,45,46,134,175,65,45,46,100],
      dataCreature: new Date(2021,6,29,12,32,54).toDateString(),
      comments:[{usersComent:"Admin",text:"string"},
        {usersComent:"Admin",text:"В своём стремлении повысить качество жизни, они забывают, что постоянный количественный рост и сфера нашей активности"},
        {usersComent:"Dima",text:"Но независимые государства и по сей день остаются уделом либералов, которые жаждут быть разоблачены."},
        {usersComent:"Dima",text:"А ещё сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям."},
      ]
    },
  ],
  loginState: [
    {
      id: 1,
      login: "Admin",
      name: "Admin",
      password: "Admin",
      admin:true,
      dataCreatureUser: new Date(2021,7,10,12,32,54).toDateString()
    },
    {
      id: 2,
      login: "Dima",
      name: "Dima",
      password: "Dima",
      admin:false,
      dataCreatureUser: new Date(2021,7,12,16,14,54).toDateString()
    },
    {
      id: 3,
      login: "Alexander",
      name: "Alexander",
      password: "Alexander",
      admin:false,
      dataCreatureUser: new Date(2021,7,12,16,14,54).toDateString()
    }
  ],
  descriptionsData:[
    {
    text:"Добро пожаловать Перейдите для авторизации нажмите на \"Войти\"",
    img:1,
  },
    {
      text:"Можно зайти от имени администратора, в этом случае будут доступны дополнительные опции, такие как редактирование и удаление блогов",
      img:2,
    },
    {
      text:"В базе есть уже зарегистривованные пользователи, например 'Alexander' c поролем 'Alexander'",
      img:3,
    },
    {
      text:"Также вы можете самостоятельно зарегистрироваться, данные храняться в app/Store/myblog.reducer и сохраняются в локальном хронилище вашего браузера это обеспечивает возможность сохранять и синхронизировать данные при одновременной работе на сайте с двух и более одновременно открытих вкладок в браузере ",
      img:4,
    },
    {
      text:"При регистрации необходимо заполнить все поля",
      img:5,
    },
    {
      text:"после успешного входа в систему нам становятся доступны дополнтельные пункты меню 'Блоги' 'Статистика' и 'Модуль статистики' последний вынесен в отдельный блог 'app/models/charts' я не сразу разобрался с модулями и на 'Модуль статистики' решил показать что всётаки понял как с ними работать, хоть в этом приложении их нет",
      img:6,
    },
    {
      text:"Маршрутизация приложения описана в файле app/routes.ts базовые URL /home, /blogs, /blogs/:id, /charts, /login, /registration, /new ,/module, в случае ошибочного URL предусвотренна страница 404. Самая большая и интересная страница это Блоги ",
      img:7,
    },
    {
      text:"Вверхней част распологается поиск по темам вы можете ",
      img:8,
    },
    {
      text:"geyrn 2",
      img:9,
    },
    {
      text:"geyrn 2",
      img:10,
    },
    {
      text:"geyrn 2",
      img:11,
    },
    {
      text:"geyrn 2",
      img:12,
    },
    {
      text:"geyrn 2",
      img:13,
    },
    {
      text:"geyrn 2",
      img:14,
    },
    {
      text:"geyrn 2",
      img:15,
    },
    {
      text:"geyrn 2",
      img:16,
    },
    {
      text:"geyrn 2",
      img:17,
    },
    {
      text:"geyrn 2",
      img:18,
    },
    {
      text:"geyrn 2",
      img:19,
    },
    {
      text:"geyrn 2",
      img:20,
    },


  ]
}

export const myblogReducer = (state = initialState, Action: MyblogActions) => {
  switch (Action.type) {
    case  myblogActionType.load: // 12 создаём новый case onDisabledLikeActions 13-в widget.ts написать диспатч
      return {
        ...Action.payload.state

      };
    case myblogActionType.createBlog:
      return {
        ...state,  // делаем копия объекта
        idIncrement: state.idIncrement + 1,// повышаем инкримент
        blogList: [// обращаемся к новому blogList
          ...state.blogList, // копируем старый набор объектов blogList
          {
            id: state.idIncrement, // id = idIncrement
            name: state.userName,
            topic: Action.payload.topic,
            text: Action.payload.text,
            tegs:Action.payload.tegs,
            like_position: [],
            dataCreature: new Date().toDateString(),
            comments:[]

          }
        ]
      };
    case  myblogActionType.clickLike: // 12 создаём новый case onDisabledLikeActions 13-в widget.ts написать диспатч
      debugger
      return {
        ...state,
        blogList: state.blogList.map(blog => blog.id === Action.payload.id ?
          {
            ...blog,
          like_position: [...blog.like_position,state.userIdAutorithed],
        }
        : blog)
      };

    case  myblogActionType.clickDisLike:
      debugger
      return {
        ...state,
        blogList: state.blogList.map(blog => blog.id === Action.payload.id ? {
          ...blog,
          // like_position: []
          like_position:[ ...blog.like_position.filter(x=>x!==state.userIdAutorithed)]
        } : blog)
      };
    case  myblogActionType.deleteBlog:

      return {
        ...state,
        blogList: state.blogList.filter(blog => blog.id !== Action.payload.id)

      };
    case  myblogActionType.editBlogTopic:
      return {
        ...state,
        blogList: state.blogList.map(blog => blog.id === Action.payload.id ? {
          ...blog,
          topic: Action.payload.topic
        } : blog)
      };
    case  myblogActionType.editBlogText:
      return {
        ...state,
        blogList: state.blogList.map(blog => blog.id === Action.payload.id ? {
          ...blog,
          text: Action.payload.text
        } : blog)
      };
    case  myblogActionType.editBlogTags:
      return {
        ...state,
        blogList: state.blogList.map(blog => blog.id === Action.payload.id ? {
          ...blog,
          tegs: Action.payload.tags
        } : blog)
      };



    case  myblogActionType.login:
      return {
        ...state,
        userName:Action.payload.name,
        authorized: true,
        admin:Action.payload.admin,
        userIdAutorithed:Action.payload.id


      };
    case  myblogActionType.logOut:
      return {
        ...state,
        userIdAutorithed:0,
        authorized: false,
        admin:false,
        userName:"incognito"
      };

    case myblogActionType.createUser:
      return {
        ...state,
        authorized: true,
        idUserIncrement: state.idUserIncrement + 1,
        userIdAutorithed:state.idUserIncrement,
        userName: Action.payload.name,
        loginState: [
          ...state.loginState,
          {
            id: state.idUserIncrement,
            name:Action.payload.name,
            login: Action.payload.login,
            password: Action.payload.password,
            admin:false,
            dataCreatureUser: new Date().toLocaleTimeString()

          }
        ]
      };
    case myblogActionType.createComment:
      debugger
      return {

        ...state,
        blogList: state.blogList.map(blog => blog.id === Action.payload.id ?
          {
            ...blog,
            comments: [...blog.comments, {usersComent:state.userName,text:Action.payload.comment}],
          }
          : blog)
      };
    default:
      return state
  }

}

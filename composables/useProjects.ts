export function useProjects() {
  // TODO - use locale to hold all the projects data
    const PROJECTS:IProject[] = [
  {
  "id": 0,
  "title": "Burotopia",
  "img": "placeholder4"
  },
  {
    "id": 1,
    "title": "Bearing Gifts",
    "img": "placeholder5"
  }, 
  {
    "id": 2,
    "title": "Forget me not",
    "img": "placeholder"
  }, 
  {
    "id": 3,
    "title":"Cartofaf",
    "img": "placeholder6"
  }, 
  {
    "id": 4,
    "title": "Petits soins",
    "img": "placeholder2"
  }, {
    "id": 5,
    "title":"Leeway Arts", 
    "img": "placeholder8"
  }, {
    "id": 6,
    "title": "Syndicalisme Hebdo",
    "img": "placeholder7"
  }, {
    "id": 7,
    "title":"Petite histoire de la Chimie",
    "img": "placeholder3"
  }, {
    "id": 8,
    "title":"R&D experiments",
    "img": "placeholder"
    }, {
    "id":9,
    "title":"Disguise Cloud", 
    "img": "placeholder9"
  }

  ]

  const findProjectBySlug = (str:string) => {

    return PROJECTS.filter(p => p.title.toLowerCase().includes(str.split('-')[0]))[0]

  }

  return { PROJECTS, findProjectBySlug }


}
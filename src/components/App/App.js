import Header from "../Header";
import MainCards from "../MainCards";
import MainTable from "../MainTable";
import MainTitle from "../MainTitle";
import NewsCards from "../NewsCards";

const App = () => {


  const data = [
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 1},
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 2},
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 3},
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 4},
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 5},
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 6},
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 7},
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 8},
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 9},
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 10},
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 11},
    {image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', title: 'Test News', text: 'asdghjd akad jgsad asg dkasd kasjdg skad gaksjd gksjadgk asjdg ksajgd kasjd gkajd gksajgdkasjgad kdsajgd ksajd gas', id: 12},



  ]
  


  return (
    <div>
      <Header />
      <NewsCards data={data}/>
      <MainTitle />
      <MainCards />
      <MainTable />
    </div>
    
  );
}

export default App






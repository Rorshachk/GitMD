mod git_monitor;

use tauri::Manager;

#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
}


fn print_type_of<T>(_: &T) {
	println!("{}", std::any::type_name::<T>())
}

fn main() {
  tauri::Builder::default().setup(|app| {
	  println!("Is this working ?");

	  //example of communicating
	  let id = app.listen_global("click", |event| {
		  println!("got event-name with payload {:?}", event.payload());
	  });
	  Ok(())
  })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

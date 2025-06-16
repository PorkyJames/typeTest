package main

// //! Package for formatting text, including print to console
// import "fmt"
import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	//! Manually write the header, better practice
	w.WriteHeader(http.StatusOK)
	fmt.Println(w, "This is success in the terminal!")
	fmt.Println("This is without w in the terminal")

	//! Writes a formatted String
	fmt.Fprintln(w, "This is success in the Body")
	//! Sends to io.Writer in byte format.
	w.Write([]byte("This is success in the Body as well"))

	//! Essentially it does the same thing with some differences.
}

func main() {
	http.HandleFunc("/", handler)
	fmt.Println("Request Sent")
	http.ListenAndServe(":8080", nil)
}


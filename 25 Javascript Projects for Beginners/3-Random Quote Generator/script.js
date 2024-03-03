function generate() {
    var quotes = {
        "-Virginia Woolf": "Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
        "-Coco Channel": "The most courageous act is still to think for yourself. Aloud.",
        "George Orwell": "Some tourists think Amsterdam is a city of sin, but in truth it is a city of freedom. And in freedom, most people find sin."
    };

    // Yazarları içeren bir dizi oluşturun
    var authors = Object.keys(quotes);

    // Rastgele bir yazar seçin
    var selectedAuthor = authors[Math.floor(Math.random() * authors.length)];

    // Seçilen yazarın alıntısını alın
    var selectedQuote = quotes[selectedAuthor];

    // HTML içindeki elementlere alıntı ve yazarı yerleştirin
    document.getElementById("quote").innerHTML = selectedQuote;
    document.getElementById("author").innerHTML = selectedAuthor;
}

// Fonksiyonu çağırarak alıntıları ve yazarları yerleştirin
generate();

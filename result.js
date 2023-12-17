// Assuming you have initialized Firebase and obtained a reference to your Firestore database

const db = firebase.firestore();

function getDataByRollNumber(rollNumber) {
    const rowDataRef = db.collection("myCollection");
    const query = rowDataRef.where("rollNo", "==", rollNumber);

    query.get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    console.log("Data for Roll Number " + rollNumber + ":", data);
                });
            } else {
                console.log("No data found for Roll Number " + rollNumber);
            }
        })
        .catch((error) => {
            console.error("Error getting data:", error);
        });
}

const rollNumberToSearch = "234";
getDataByRollNumber(rollNumberToSearch);

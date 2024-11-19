def get_language():
    print("Сіз қандай тілде сөйлейсіз? (Қазақша, Орысша, Ағылшынша)")
    language = input().lower()

    if language == "қазақша":
        greet_in_kazakh()
    elif language == "орысша":
        greet_in_russian()
elif language == "ағылшынша":
        greet_in_english()
    else:
        print("Қате енгізу! Өтінеміз, дұрыс тіл таңдаңыз: қазақша, орысша немесе ағылшынша.")
        get_language()

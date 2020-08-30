# If someone does not owe someone else anything, that person should not be in their debt list (saves space ig, just want some consistency tho)

'''
Return an array of members with calculated debts for storage in a room_data.
This is not efficient. It requires all the information in the database every time (trips and transactions parameters).
'''
def calculate_debt(members, trips, transactions):
    member_data = {}

    for member in members:
        member_data[member] = {}
    
    for trip in trips:
        buyer = trip['buyer']
        communal = trip['communal']
        personals = trip['personals']

        communal_split = communal['total'] / len(members)
        for member in members:
            personal_cost = 0 if member not in personals.keys() else personals[member]['total']
            member_data = add_debt(member_data, member, buyer, communal_split + personal_cost)

    print('Transactions:')
    print(transactions)
    for transaction in transactions:
        member_data = add_debt(member_data, transaction['receiver'], transaction['payer'], transaction['amount'])

    print(member_data)
    return member_data


# Helper function for debt calculations
def add_debt(member_data, ower, owed, amount):
    print('{} owes {} ${}'.format(ower, owed, amount))
    if ower == owed: return member_data
    # Find out if the owed owes the ower anything, bc we might be able to cancel some out.
    if ower in member_data[owed].keys():
        counterdebt = member_data[owed][ower]

        if counterdebt > amount:
            counterdebt -= amount
            member_data[owed][ower] = counterdebt
        elif counterdebt == amount:
            del member_data[owed][ower]
        else:
            amount -= counterdebt
            del member_data[owed][ower]
            member_data[ower][owed] = amount
    else:
        if owed in member_data[ower].keys():
            member_data[ower][owed] += amount
        else:
            member_data[ower][owed] = amount
    return member_data
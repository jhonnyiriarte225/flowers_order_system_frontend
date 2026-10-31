
# WhatsApp flower order capture system
# capture information from whatsapp
# diferents clients 
# information about flowers
# information, type of flower or arrangement of flower,  quantity,  date to deliver.
# to send information to  a graphic web in a order web , the first income to first outcome.
# this employers have the same quantity of orders , a balance
# note: emulate the order capture process for testing purposes

# example of captured order
orders = [
    {
        "client": "John Doe",
        "flower_type": "Roses",
        "arrangement": "Bouquet",
        "quantity": 12,
        "delivery_date": "2024-06-15"
    }
]   


def get_orders():
    return orders

def display_orders():
    for order in get_orders():
        print(f"Client: {order['client']}")
        print(f"Flower Type: {order['flower_type']}")
        print(f"Arrangement: {order['arrangement']}")
        print(f"Quantity: {order['quantity']}")
        print(f"Delivery Date: {order['delivery_date']}")
        print("-" * 20)

if __name__ == "__main__":
    display_orders()    

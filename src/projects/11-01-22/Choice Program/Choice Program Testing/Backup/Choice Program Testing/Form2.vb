Public Class Form2

    Private Sub Form2_Leave(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Leave

        Form1.Show()

    End Sub


    Private Sub Form2_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        If (Form1.sus = 1) Then

            Label1.Visible = False

        End If

        If (Form1.laptop = 1) Then

            Label6.Visible = False

        End If

        If (Form1.books = 1) Then

            Label7.Visible = False

        End If

        If (Form1.elpro = 1) Then

            Label8.Visible = False

        End If

        If (Form1.bob = 1) Then

            Label9.Visible = False

        End If

        If (Form1.drone = 1) Then

            Label10.Visible = False

        End If

        Label3.Visible = False
        Label4.Visible = False
        Label2.Text = Form1.balance

    End Sub

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Form1.Show()
        Me.Close()

    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click

        Form3.Show()
        Me.Close()

    End Sub

    Private Sub Timer1_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Timer1.Tick

        Label4.Visible = False

    End Sub

    Private Sub Timer2_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Timer2.Tick

        Label3.Visible = False

    End Sub

    Private Sub Label1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label1.Click

        If (Form1.balance >= 500) Then

            Form1.balance = Form1.balance - 500
            Timer2.Enabled = True
            Label3.Text = "You bought a suS"
            Label3.Visible = True
            Label2.Text = Form1.balance
            Form1.sus = Form1.sus + 1
            Label1.Visible = False
            Form1.Label1.Text = Form1.balance
        End If

        If (Form1.balance < 500) Then

            Timer1.Enabled = True
            Label4.Visible = True

        End If

    End Sub

    Private Sub Label6_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label6.Click

        If (Form1.balance >= 400) Then

            Form1.balance = Form1.balance - 400
            Timer2.Enabled = True
            Label3.Text = "You bought a Laptop"
            Label3.Visible = True
            Label2.Text = Form1.balance
            Form1.laptop = Form1.laptop + 1
            Label6.Visible = False
            Form1.Label1.Text = Form1.balance
        End If

        If (Form1.balance < 400) Then

            Timer1.Enabled = True
            Label4.Visible = True

        End If
    End Sub

    Private Sub Label7_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label7.Click

        If (Form1.balance >= 100) Then

            Form1.balance = Form1.balance - 100
            Timer2.Enabled = True
            Label3.Text = "You bought a bag"
            Label3.Visible = True
            Label2.Text = Form1.balance
            Form1.books = Form1.books + 1
            Label7.Visible = False
            Form1.Label1.Text = Form1.balance
        End If

        If (Form1.balance < 100) Then

            Timer1.Enabled = True
            Label4.Visible = True

        End If

    End Sub

    Private Sub Label8_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label8.Click

        If (Form1.balance >= 10000) Then

            Form1.balance = Form1.balance - 10000
            Timer2.Enabled = True
            Label3.Text = "You bought El Pro"
            Label3.Visible = True
            Label2.Text = Form1.balance
            Form1.elpro = Form1.elpro + 1
            Label8.Visible = False
            Form1.Label1.Text = Form1.balance
        End If

        If (Form1.balance < 10000) Then

            Timer1.Enabled = True
            Label4.Visible = True

        End If

    End Sub

    Private Sub Label9_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label9.Click

        If (Form1.balance >= 5000) Then

            Form1.balance = Form1.balance - 5000
            Timer2.Enabled = True
            Label3.Text = "You bought bOB"
            Label3.Visible = True
            Label2.Text = Form1.balance
            Form1.bob = Form1.bob + 1
            Label9.Visible = False
            Form1.Label1.Text = Form1.balance
        End If

        If (Form1.balance < 5000) Then

            Timer1.Enabled = True
            Label4.Visible = True

        End If

    End Sub

    Private Sub Label10_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label10.Click

        If (Form1.balance >= 800) Then

            Form1.balance = Form1.balance - 800
            Timer2.Enabled = True
            Label3.Text = "You bought a Drone"
            Label3.Visible = True
            Label2.Text = Form1.balance
            Form1.drone = Form1.drone + 1
            Label10.Visible = False
            Form1.Label1.Text = Form1.balance
        End If

        If (Form1.balance < 800) Then

            Timer1.Enabled = True
            Label4.Visible = True

        End If

    End Sub
End Class